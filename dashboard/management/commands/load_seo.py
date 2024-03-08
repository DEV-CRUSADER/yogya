from robots.models import Rule
from django.contrib.sites.models import Site

from django.core.management.base import BaseCommand

from core.settings import DOMAIN_NAME, SITE_NAME


class Command(BaseCommand):
    help = "Load SEO data into the database."

    def handle(self, *args, **options):
        site = Site.objects.create(domain=DOMAIN_NAME, name=SITE_NAME)
        site.save()
        self.stdout.write(
            self.style.SUCCESS("Successfully loaded SEO data.")
        )