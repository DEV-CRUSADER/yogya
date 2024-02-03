from django.core.management.base import BaseCommand

from dashboard.models import IndexLists
from dashboard.services.historical_index.data import DefaultIndexes


class Command(BaseCommand):
    help = "Loades Initialal Historical Indexes"

    def handle(self, *args, **options):

        data = DefaultIndexes()

        converted_data_list = []

        for key, item in data.items():
            for indexesData in item:
                converted_data_list.append({
                    "name": indexesData["name"],
                    "symbol": indexesData["symbol"],
                    "type": key
                })

        for data in converted_data_list:
            instace = IndexLists.objects.create(**data)
            instace.save()

        self.stdout.write(
            self.style.SUCCESS('Successfully loaded initial Historical Indexes"')
        )