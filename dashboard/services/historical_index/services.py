import logging
import pandas as pd
import statistics
import nsepythonserver as nse
import datetime


log = logging.getLogger(__name__)


class HistoricalIndexServices:

    @staticmethod
    def get_historical_index_from_and_to_dates(data):

        log.info(f'Retrieving historical Service')
        data['start_date'] = data['start_date'].strftime('%d-%b-%Y')
        data['end_date'] = data['end_date'].strftime('%d-%b-%Y')

        log.info(f"Getting historical index from and to dates: {data}")
        json_response = HistoricalIndexServices.get_historical_nse_index(data)
        return json_response

    @staticmethod
    def get_historical_nse_index(data):
        log.info("Getting historical nse index")
        end_date = datetime.datetime.now()
        end_date = end_date.strftime("%d-%b-%Y")

        if data is None:
            symbol = "NIFTY 50"
            start_date = "1-Jan-1990"
            end_date = end_date
        else:
            symbol = data["symbol"]
            start_date = data["start_date"]
            end_date = data["end_date"]

        try:
            nse_data = nse.index_pe_pb_div(symbol=symbol, start_date=start_date, end_date=end_date)
        except Exception as e:
            log.error(f"Error getting nse: {e}")
            return {
                "status": False,
                "data": {}
            }

        year_list = nse_data['DATE'][::-1].apply(HistoricalIndexServices.extract_year).to_list()

        context = {
            "index_name": nse_data['Index Name'][0],
            "date": nse_data["DATE"][::-1].to_list(),
            "pb": HistoricalIndexServices.get_json_for_historical_index(data=nse_data['pb'][::-1]),
            "pe": HistoricalIndexServices.get_json_for_historical_index(data=nse_data['pe'][::-1]),
            "divYield": HistoricalIndexServices.get_json_for_historical_index(data=nse_data['divYield'][::-1])
        }

        return {
            "status": True,
            "data": context
        }

    @staticmethod
    def get_json_for_historical_index(data):

        data = data.replace('-', 0).replace('', 0).astype(float)
        data[data > 200] = 0
        data = data[data != 0].round(2)
        
        filtered_data = data[(data != 0) & (data <= 200)]

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
        return return_context

    @staticmethod
    def extract_year(date_string):
        date_object = datetime.datetime.strptime(date_string, "%d %b %Y")
        return date_object.year