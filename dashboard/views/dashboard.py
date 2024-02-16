import logging

from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view

log = logging.getLogger(__name__)


class DashboardView:

    @staticmethod
    def load_dashboard(request):
        log.info("Loading dashboard")
        return render(request, "dashboard/index.html")