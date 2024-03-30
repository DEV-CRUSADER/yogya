import logging
import pandas as pd
import statistics
import datetime
import nsepythonserver as nse
import time


from rest_framework.response import Response
from rest_framework.decorators import api_view

log = logging.getLogger(__name__)


from dashboard.services.clients.serializers import CreateClientSerializer, CreateClientWaitingListSerializer, \
                                    CreateClientInsuranceSerializer, CreateInsuranceSerializer, CreateInvestmentSerializer, CreateLoanSerializer, \
                                    GetClientSerializer, GetClientDetailSerializer, GetInsuranceSerializer, GetInvestmentSerializer, GetLoanSerializer

from dashboard.models import Clients, Insurance, Investment, Loan, ClientWaitingList


class ClientsService():

    @staticmethod
    def create_client(data):
        log.info(f"Starting the message.=> {data}")

        serialized_data = CreateClientSerializer(data).data

        existing_client = Clients.objects.filter(pancard=serialized_data["pancard"])

        if existing_client.exists():
            log.error(f"Client Already Exists => {existing_client}")
            return {"status": False, "message" : "Client Already Exists"}

        client = Clients.objects.create(**serialized_data)
        client.save()

        clients_Insurances = ClientsService.create_insurance(data["insurance"], client)
        clients_Investments = ClientsService.create_investment(data["investment"], client)
        clients_Loans = ClientsService.create_loan(data["loan"], client)
        client_Waiting_List = ClientsService.create_client_waiting_list(data["waiting"], client)

        log.info(f"Client Created Successfully => {client}, {clients_Insurances}, {clients_Investments}, {clients_Loans}, {client_Waiting_List}")

        return {"status": True, "message" : "Client Created Successfully"}

    @staticmethod
    def create_insurance(data, client=None):
        log.info(f"Creating Insurance => {data}")


        insurance_objects = []

        if client is not None:
            serialized_data = CreateClientInsuranceSerializer(data, many=True).data
            for insurance in serialized_data:
                insurance["client"] = client
                insurance_objects.append(Insurance(**insurance))
        else:
            serialized_data = CreateInsuranceSerializer(data, many=True).data
            for insurance in serialized_data:
                insurance["client"] = ClientsService.get_client_by_id(pk=insurance.get('client_id'))
                insurance_objects.append(Insurance(**insurance))

        Insurance.objects.bulk_create(insurance_objects)
        return {"status": True, "message" : "Insurance Created Successfully"}


    @staticmethod
    def create_investment(data, client):
        log.info(f"Creating Investments.=> {data}")

        serialized_data = CreateInvestmentSerializer(data, many=True).data

        investment_objects = []
        for investment in serialized_data:
            investment["client"] = client
            investment_objects.append(Investment(**investment))

        Investment.objects.bulk_create(investment_objects)
        return {"status": True, "message" : "Investment Created Successfully"}
    

    @staticmethod
    def create_loan(data, client):
        log.info(f"Creating Loans=> {data}")

        serialized_data = CreateLoanSerializer(data, many=True).data

        loan_objects = []
        for loan in serialized_data:
            loan["client"] = client
            loan_objects.append(Loan(**loan))

        Loan.objects.bulk_create(loan_objects)

        return {"status": True, "message" : "Loan Created Successfully"}
    
    @staticmethod
    def create_client_waiting_list(data, client):
        log.info(f"Creating client waiting list=> {data}")

        serialized_data = CreateClientWaitingListSerializer(data).data

        waitinglist_object = []
        if serialized_data['stocks']:
            waitinglist_object.append(ClientWaitingList(client=client, waiting_type="stocks"))

        if serialized_data['mutual_funds']:
            waitinglist_object.append(ClientWaitingList(client=client, waiting_type="mutual_funds"))

        ClientWaitingList.objects.bulk_create(waitinglist_object)

        return {"status": True, "message" : "Client Waiting List Created Successfully"}
    

    @staticmethod
    def get_clients():
        clients = Clients.objects.all()
        return GetClientSerializer(clients, many=True).data
    
    @staticmethod
    def get_client_by_id(pk):
        return Clients.objects.get(id=pk)
    
    @staticmethod
    def get_insurances():
        insurance = Insurance.objects.all()
        return GetInsuranceSerializer(insurance, many=True).data
    
    @staticmethod
    def get_insurance_by_id(pk):
        return Insurance.objects.get(id=pk)
    
    @staticmethod
    def get_client(client_id):
        client = ClientsService.get_client_by_id(pk=client_id)
        
        client_data = GetClientDetailSerializer(client).data
        insurance_data = GetInsuranceSerializer(client.insurance, many=True).data
        investment_data = GetInvestmentSerializer(client.investment, many=True).data
        loan_data = GetLoanSerializer(client.loan, many=True).data

        context = {
            "client": client_data,
            "insurance": insurance_data,
            "investment": investment_data,
            "loan": loan_data,
        }

        return context