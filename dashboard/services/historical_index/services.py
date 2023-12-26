import logging
import pandas as pd
import statistics
import json
import datetime

import logging

from dashboard.services.historical_index.serializers import StockDataResponseSerializer

from dashboard.services.historical_index.nseserver import nsepythonserver as nse

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
            symbol = "Nifty Div Opps 50"
            start_date = "1-Jan-1990"
            end_date = end_date
        else:
            symbol = data["symbol"]
            start_date = data["start_date"]
            end_date = data["end_date"]

        nse_data = nse.index_pe_pb_div(symbol=symbol, start_date=start_date, end_date=end_date)

        nse_data = json.loads(nse_data["d"])
        nse_data=pd.DataFrame.from_records(nse_data)


        year_list = nse_data['DATE'][::-1].apply(HistoricalIndexServices.extract_year).to_list()

        context = {
            "symbol": symbol,
            "date": year_list,
            "pb": HistoricalIndexServices.get_json_for_historical_index(data=nse_data['pb'][::-1]),
            "pe": HistoricalIndexServices.get_json_for_historical_index(data=nse_data['pe'][::-1]),
            "divYield": HistoricalIndexServices.get_json_for_historical_index(data=nse_data['divYield'][::-1])
        }

        serializer = StockDataResponseSerializer(data=context)

        if serializer.is_valid():
            return {
                "status": True,
                "data": serializer.validated_data
            }
        else:
            log.exception(f"Failed: Exception {serializer.errors}")
            return {
                "status": False,
                "data": serializer.errors
            }

    @staticmethod
    def get_json_for_historical_index(data):

        data = data.replace('-', 0).replace('', 0).astype(float)

        population_devation = statistics.pstdev(data)
        mean = statistics.mean(data)

        df = pd.DataFrame(data)

        df["SDM2"] = mean - (2 * population_devation)
        df["SDM1"] = mean - population_devation
        df["SD"] = mean
        df["SDP1"] = mean + population_devation
        df["SDP2"] = mean + (2 * population_devation)

        return_context = {
            "SDM2": df["SDM2"].round(3).to_list(),
            "SDM1": df["SDM1"].round(3).to_list(),
            "SD": df["SD"].round(3).to_list(),
            "SDP1": df["SDP1"].round(3).to_list(),
            "SDP2": df["SDP2"].round(3).to_list(),
            "standard": data.round(3).to_list()
        }
        return return_context

    @staticmethod
    def extract_year(date_string):
        date_object = datetime.datetime.strptime(date_string, "%d %b %Y")
        return date_object.year