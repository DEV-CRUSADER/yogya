import logging
import pandas as pd
import statistics
import datetime
import nsepythonserver as nse
import time


from rest_framework.response import Response
from rest_framework.decorators import api_view

from dashboard.models import IndexLists, IndexDataFromNSE
from dashboard.services.historical_index.serializers import IndexSerializer, GetIndexSerializer

log = logging.getLogger(__name__)


class HistoricalIndexServices:

    @staticmethod
    def get_historical_index_from_and_to_dates(data):
        log.info(f"Getting historical index from and to dates: {data}")
        json_response = HistoricalIndexServices.get_historical_nse_index(data)
        return json_response

    @staticmethod
    def get_historical_nse_index(data):
        log.info("Getting historical nse index")
        end_date = datetime.datetime.now().strftime("%d-%b-%Y")

        log.info(f"Data: {data}")

        if data is None:
            symbol = "Nifty 50"
            start_date = "1-Jan-1990"
            end_date = end_date
        else:
            symbol = data["symbol"]
            start_date = data["start_date"]
            end_date = data["end_date"]


        try:
            symbol_id = IndexLists.objects.get(symbol=symbol)
            nse_data_query = IndexDataFromNSE.objects.filter(symbol=symbol_id, 
                                                        date__range=[start_date, 
                                                        end_date]).order_by('date')
            nse_data_list = list(nse_data_query.values())
            nse_data = pd.DataFrame(nse_data_list)

        except Exception as e:
            log.error(f"Error getting nse: {e}")
            return {
                "status": False,
                "data": {},
                "errors": "Error getting nse data"
            }

        # year_list = nse_data['date'][::-1].apply(HistoricalIndexServices.extract_year).to_list()

        if nse_data.empty:
            return {
                "status": False,
                "data": {},
                "errors": "No data found"
            }

        pb_labels, pb_data = HistoricalIndexServices.get_json_for_historical_index(data=nse_data['pb'], labels=nse_data['date'])
        pe_labels, pe_data = HistoricalIndexServices.get_json_for_historical_index(data=nse_data['pe'], labels=nse_data['date'])
        divyield_labels, divyield_data = HistoricalIndexServices.get_json_for_historical_index(data=nse_data['divyield'], labels=nse_data['date'])

        context = {
            "index_name": nse_data['index_name'][0],
            "pb": {
                "labels": pb_labels,
                "data": pb_data
            },
            "pe": {
                "labels": pe_labels,
                "data": pe_data
            },
            "divyield": {
                "labels": divyield_labels,
                "data": divyield_data
            },
        }

        if context["pb"] == {} or context["pe"] == {} or context["divyield"] == {}:
            return {
                "status": False,
                "data": {},
                "errors": "No Data Found"
            }

        return {
            "status": True,
            "data": context
        }

    @staticmethod
    def get_json_for_historical_index(data, labels):

        data = data.replace('-', 0).replace('', 0).astype(float)
        data[data > 200] = 0
        data = data[data != 0].round(2)

        filtered_data = []
        filtered_labels = []
        for datum, label in zip(data, labels):
            if datum != 0 and datum <= 200:
                filtered_data.append(datum)
                filtered_labels.append(label)

        filtered_data = pd.Series(filtered_data)
        filtered_labels = pd.Series(filtered_labels)

        if filtered_data.empty:
            return {}

        population_devation = statistics.pstdev(filtered_data)
        mean = statistics.mean(filtered_data)

        df = pd.DataFrame(data)

        df["SDM2"] = mean - (2 * population_devation)
        df["SDM1"] = mean - population_devation
        df["SD"] = mean
        df["SDP1"] = mean + population_devation
        df["SDP2"] = mean + (2 * population_devation)

        return_context = {
            "SDM2": df["SDM2"].round(2).astype(str).to_list(),
            "SDM1": df["SDM1"].round(2).astype(str).to_list(),
            "SD": df["SD"].round(2).astype(str).to_list(),
            "SDP1": df["SDP1"].round(2).astype(str).to_list(),
            "SDP2": df["SDP2"].round(2).astype(str).to_list(),
            "standard": data.round(2).astype(str).to_list()
        }
        return filtered_labels, return_context

    @staticmethod
    def extract_year(date_string):
        date_object = datetime.datetime.strptime(date_string, "%d %b %Y")
        return date_object.year

    @staticmethod
    def add_new_index_data_to_db( data ):
        log.info(f"Posting index data to db. Data: {data} ")

        instace = IndexLists.objects.create(**data)
        instace.save()

        return {"status": True, "data": "Data added successfully"}
    
    @staticmethod
    def get_index_list(request):
        log.info(f"Getting index data from db.")
        return {"status": True, "data": HistoricalIndexServices.get_index_data_json()}
        

    @staticmethod
    def get_index_data_json():
        log.info(f"Getting index data from DB and conveting it to json.")

        index_data = IndexLists.objects.all()

        data = []
        for item in index_data:
            data.append({
                "name": item.name,
                "symbol": item.symbol,
                "type": item.type
            })
    
        return GetIndexSerializer(data, many=True).data


class HistoricalIndexNseServices:
    
    @staticmethod
    def fetch_data_from_nse(index):
        log.info(f"Fetching data from nse")

        nse_data = nse.index_pe_pb_div(symbol=index.symbol,
                                        start_date=datetime.datetime.now().strftime("%d-%b-%Y"),
                                        end_date=datetime.datetime.now().strftime("%d-%b-%Y"))
        
        return nse_data
    
    @staticmethod
    def filter_index_data(data):
        
        data = data.replace('-', 0).replace('', 0).astype(float)
        data[data > 200] = 0
        data = data[data != 0].round(2)

        filtered_data = data[(data != 0) & (data <= 200)]

        return filtered_data
    
    @staticmethod
    def get_data_from_nse_daily(start_date=datetime.datetime.now().strftime("%d-%b-%Y") , 
                                end_date=datetime.datetime.now().strftime("%d-%b-%Y")):
        log.info(f"Getting data from nse daily")

        index_lists = HistoricalIndexServices.get_index_data_json()
        data_for_today = []

        for index in index_lists:
            log.info(f"Getting data for index: {index['name']}")

            nse_data_status = True

            while nse_data_status:
                try:
                    data = nse.index_pe_pb_div(symbol=index["symbol"], 
                                                start_date=start_date, 
                                                end_date=end_date)
                    nse_data_status = False
                except Exception as e:
                    log.error(f"Error getting nse data: {e}")
                    log.info(f"Retrying after 5 minutes for index: {index['name']}")
                    time.sleep(60*2)
                    continue

            if data.empty:
                continue
                        
            data['pb'] = HistoricalIndexNseServices.filter_index_data(data=data['pb'])
            data['pe'] = HistoricalIndexNseServices.filter_index_data(data=data['pe'])
            data['divyield'] = HistoricalIndexNseServices.filter_index_data(data=data['divyield'])
            
            data_for_today.append({
                "index_name": index["name"],
                "date": data["DATE"][0],
                "pb": data["pb"][0],
                "pe": data["pe"][0],
                "divyield": data["divyield"][0]
            })
        
        print(data_for_today)
        instances = [IndexDataFromNSE(**item) for item in data_for_today]
        IndexDataFromNSE.objects.bulk_create(instances)

        return {"status": True, "data": data_for_today}
