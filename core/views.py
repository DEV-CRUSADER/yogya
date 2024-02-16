import logging

from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

log = logging.getLogger(__name__)

def load_404(request, exception):
    log.error("404 error: %s", exception)
    return render(request, "404.html")

@staticmethod
def load_homepage(request):
    log.info("Loading homepage")
    return render(request, "index.html")

@staticmethod
@api_view(['GET', 'POST'])
def login_required(request):
    log.error("Login required")
    return Response({"status": False, "message": "Login required"}, status=status.HTTP_401_UNAUTHORIZED)