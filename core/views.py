from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


def load_404(request, exception):
    return render(request, "404.html")

@staticmethod
def load_homepage(request):
    return render(request, "index.html")

@staticmethod
@api_view(['GET', 'POST'])
def login_required(request):
    return Response({"status": False, "message": "Login required"}, status=status.HTTP_401_UNAUTHORIZED)