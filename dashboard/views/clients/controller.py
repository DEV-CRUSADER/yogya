import logging

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.contrib.auth.decorators import permission_required, login_required

from dashboard.services.clients.serializers import ClientsSerializer

log = logging.getLogger(__name__)


class ClientsView():

    @staticmethod
    @api_view(['POST'])
    def CreateClient(request):
        log.info(f"Starting the message.=> {request.data}")

        serializer = ClientsSerializer(data=request.data)

        if not serializer.is_valid():
            log.error(f"Error in creating client.=> {serializer.errors}")
            return Response({"status": False, "message": serializer.errors}, status=400)

        return Response({"status": True, "message" : "Client Created Successfully", "data": request.data}, status=200)