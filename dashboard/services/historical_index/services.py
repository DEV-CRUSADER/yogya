import logging
import datetime
import pandas as pd
import statistics
import nsepythonserver as nse



log = logging.getLogger(__name__)


class HistoricalIndexServices:


    @staticmethod
    def get_historical_index_from_and_to_dates(start_date, end_date):
        pass

    @staticmethod
    def get_historical_nse_index():

        current_date = datetime.datetime.now()

        symbol = "NIFTY 50"
        start_date = "1-Jan-1990"
        formatted_end_date = current_date.strftime("%d-%b-%Y")

        nse_data = nse.index_pe_pb_div(symbol=symbol, start_date=start_date, end_date=formatted_end_date)

        return True