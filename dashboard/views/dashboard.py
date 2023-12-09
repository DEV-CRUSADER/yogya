from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view


class DashboardView:

    @staticmethod
    def load_dashboard(request):
        return render(request, "dashboard/index.html")