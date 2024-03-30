import logging
import uuid
from datetime import datetime

from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from dashboard.services.historical_index.serializers import NullableUUIDField, CustomDateField

from dashboard.models import Clients,  Insurance, Investment, Loan,  ClientWaitingList

log = logging.getLogger(__name__)


class ClientsSerializer(serializers.Serializer):

    first_name = serializers.CharField(max_length=100, required=True)
    last_name = serializers.CharField(max_length=100, required=True)
    birthdate = serializers.DateField(required=True)
    email = serializers.EmailField(required=True)
    pancard = serializers.CharField(max_length=100, required=True)
    salary = serializers.FloatField(required=False)
    phone_number = serializers.CharField(max_length=15, required=True)
    current_knowledge = serializers.CharField(max_length=100, required=False)
    current_occupation = serializers.CharField(max_length=256, required=False)
    risk_tolerance = serializers.JSONField(required=False)
    emergency_funds = serializers.FloatField(required=False)
    goals = serializers.ListField(child=serializers.CharField(max_length=200), required=False)
    feedback = serializers.CharField(max_length=2000, required=False, allow_blank=True, allow_null=True)
    insurance = serializers.ListField(child=serializers.JSONField(required=False), required=False)
    investment = serializers.ListField(child=serializers.JSONField(required=False), required=False)
    loan = serializers.ListField(child=serializers.JSONField(required=False), required=False)
    waiting = serializers.JSONField(required=True)


class InsuranceSerializer(serializers.Serializer):
    type = serializers.CharField(max_length=100, required=True)
    annual_premium = serializers.FloatField(required=True)
    company_name = serializers.CharField(max_length=100, required=True)
    scheme_name = serializers.CharField(max_length=100, required=True)
    scheme_type = serializers.CharField(max_length=100, required=True)
    sum_assured = serializers.FloatField(required=True)
    client_id = serializers.UUIDField(required=True)


class InvestmetSerializer(serializers.Serializer):
    type = serializers.CharField(max_length=100, required=True)
    scheme_name = serializers.CharField(max_length=100, required=True)
    debt_quantity = serializers.CharField(max_length=100, required=True)
    share_quantity = serializers.FloatField(required=False)
    fixed_deposit = serializers.BooleanField(required=False)
    invested_amount = serializers.FloatField(required=True)
    date = CustomDateField(required=True)
    market_value = serializers.FloatField(required=False)
    portfolio = serializers.JSONField(required=False)


class LoanSerializer(serializers.Serializer):
    loan_type = serializers.CharField(max_length=100, required=True)
    amount = serializers.FloatField(required=True)


class CreateClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Clients
        fields = '__all__'
        

class CreateClientInsuranceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Insurance
        fields = '__all__'


class CreateInsuranceSerializer(serializers.ModelSerializer):
    client_id = serializers.UUIDField() 
    
    class Meta:
        model = Insurance
        fields = '__all__'


class CreateInvestmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Investment
        fields = '__all__'
        

class CreateLoanSerializer(serializers.ModelSerializer):

    class Meta:
        model = Loan
        fields = '__all__'


class CreateClientWaitingListSerializer(serializers.Serializer):
    stocks = serializers.BooleanField(required=True)
    mutual_funds = serializers.BooleanField(required=True)


class GetClientSerializer(serializers.ModelSerializer):
        class Meta:
            model = Clients
            fields = ['id','first_name', 'last_name', 'phone_number', 'email']


class GetClientDetailSerializer(serializers.ModelSerializer):
        class Meta:
            model = Clients
            fields = ['id', 'first_name', 'last_name', 'birthdate', 'email', 'pancard', 'salary', 'phone_number', 
                      'current_knowledge', 'current_occupation', 'risk_tolerance', 'emergency_funds', 'goals', 
                      'feedback']


class GetInsuranceSerializer(serializers.ModelSerializer):
        class Meta:
            model = Insurance
            fields = ['id', 'type', 'annual_premium', 'company_name', 'scheme_name', 'scheme_type', 'sum_assured']


class GetInvestmentSerializer(serializers.ModelSerializer):
        class Meta:
            model = Investment
            fields = ['id', 'type', 'scheme_name', 'debt_quantity', 'share_quantity', 'fixed_deposit', 'invested_amount', 'date', 'market_value', 'portfolio']


class GetLoanSerializer(serializers.ModelSerializer):
        class Meta:
            model = Loan
            fields = ['id', 'loan_type', 'amount']