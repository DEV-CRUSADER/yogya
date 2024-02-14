import time
import datetime
import nsepythonserver as nse

from django.core.management.base import BaseCommand

from dashboard.services.historical_index.services import HistoricalIndexServices
from dashboard.models import IndexDataFromNSE, IndexLists


class Command(BaseCommand):
    help = "Loades Initialal Data for Historical Index"

    def handle(self, *args, **options):

        start_date = "1-Jan-1990"
        end_date = datetime.datetime.now().strftime("%d-%b-%Y")

        index_lists = HistoricalIndexServices.get_index_data_json()   
        context = []

        for index in index_lists:

            nse_data_status = True
            while nse_data_status:
                try:
                    data = nse.index_pe_pb_div(symbol=index["symbol"], 
                                                start_date=start_date, 
                                                end_date=end_date)
                    nse_data_status = False
                except Exception as e:
                    print(f"Error retrying in 2 minutes. {e}")
                    time.sleep(60*2)
                    continue

            if data.empty:
                continue

                        
            data['pb'] = OtherFunctions.filter_index_data(data=data['pb'])
            data['pe'] = OtherFunctions.filter_index_data(data=data['pe'])
            data['divyield'] = OtherFunctions.filter_index_data(data=data['divyield'])


            for data_index,item in data.iterrows():
                context.append({
                    "symbol": IndexLists.objects.get(symbol=index["symbol"]),
                    "index_name": index["name"],
                    "date": datetime.datetime.strptime(item["DATE"], '%d %b %Y').date(),
                    "pb": item["pb"],
                    "pe": item["pe"],
                    "divyield": item["divyield"]
                })
            time.sleep(20)

        instances = [IndexDataFromNSE(**item) for item in context]
        IndexDataFromNSE.objects.bulk_create(instances)

        self.stdout.write(
            self.style.SUCCESS('Successfully loaded initial data for Historical Index"')
        )

class OtherFunctions:

    def filter_index_data(data):
        data = data.replace('-', 0).replace('', 0).astype(float)
        data[data > 200] = 0
        return data