import datetime

from django.contrib.sitemaps import Sitemap


class YogyacapitalSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.9

    def items(self):
        return [
            "home-page",
            "resources-page",
            "client-register-page",
            "client-login-page",
            "client-password-reset-page",
        ]

    def location(self, item):
        return item

    def lastmod(self, item):
        return datetime.date.today()

    def changefreq(self, item):
        return self.changefreq

    def priority(self, item):
        return self.priority