import logging

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.contrib.auth.decorators import permission_required, login_required

from dashboard.services.clients.serializers import ClientsSerializer, InsuranceSerializer, InvestmetSerializer, LoanSerializer
from dashboard.services.clients.service import ClientsService

log = logging.getLogger(__name__)


class ClientsAPIView():

    @staticmethod
    @api_view(['POST'])
    def create_client_view(request):
        log.info(f"Starting the message.=> {request.data}")

        serializer = ClientsSerializer(data=request.data)

        if not serializer.is_valid():
            log.error(f"Error in creating client.=> {serializer.errors}")
            return Response({"status": False, "message": serializer.errors}, status=400)

        client = ClientsService.create_client(serializer.validated_data)

        return Response(client, status=200)
    
    @staticmethod
    @api_view(['GET'])
    def get_clients_view(request):
        log.info(f"Starting the message.=> {request.data}")

        clients = ClientsService.get_clients()

        return Response(clients, status=200)
    
    @staticmethod
    @api_view(['GET'])
    def get_client_view(request, client_id):
        log.info(f"Starting the message.=> {request.data}")

        client = ClientsService.get_client(client_id)

        return Response(client, status=200)
    

class InsuranceCreateAPIView():

    @staticmethod
    @api_view(['POST'])
    def CreateInsurance(request):
        log.info(f"Starting the message.=> {request.data}")

        serializer = InsuranceSerializer(data=request.data, many=True)

        if not serializer.is_valid():
            log.error(f"Error in creating insurance.=> {serializer.errors}")
            return Response({"status": False, "message": serializer.errors}, status=400)
        else:

            insurance = ClientsService.create_insurance(data=serializer.validated_data)

            return Response({"status": True, "message" : "Insurance Created Successfully", "data": serializer.validated_data}, status=200)


    @staticmethod
    @api_view(['GET'])
    def get_insurances(request):
        log.info(f"Get insturaces {request}")
        return ClientsService.get_insurances()        
    
