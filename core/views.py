from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view


class CoreView:

    @staticmethod
    def load_homepage(request):
        return render(request, "index.html")