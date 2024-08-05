import datetime

from django.contrib.sitemaps import Sitemap
from django.urls import reverse


class ScoopInvestmentSitemap(Sitemap):

    def items(self):
        return [
            "home-page",
            "resources-page",
            "client-register-page",
            "client-login-page",
            "client-password-reset-page",
        ]

    def location(self, item):
        return reverse(item)

    def lastmod(self, item):
        return datetime.date.today()

    def changefreq(self, item):
        return "weekly"

    def priority(self, item):
        return 0.9