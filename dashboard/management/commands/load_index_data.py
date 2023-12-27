from django.core.management.base import BaseCommand

from dashboard.models import NSEIndexData

class Command(BaseCommand):
    help = "Loads data form nseindia.com"

    def handle(self, *args, **options):
        pass