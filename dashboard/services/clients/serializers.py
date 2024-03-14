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
    birthdate = CustomDateField(required=True)
    email = serializers.EmailField(required=True)
    pancard = serializers.CharField(max_length=100, required=True)
    salary = serializers.FloatField(required=False)
    phone_number = serializers.CharField(max_length=15, required=True)
    current_knowledge = serializers.CharField(max_length=100, required=False)
    current_occuption = serializers.CharField(max_length=256, required=False)
    risk_tolerance = serializers.JSONField(required=False)
    emergency_funds = serializers.FloatField(required=False)
    goals = serializers.ListField(child=serializers.CharField(max_length=200), required=False)
    feedback = serializers.CharField(max_length=2000, required=False)
    insurance = serializers.ListField(child=serializers.JSONField(required=False), required=False)
    invessments = serializers.ListField(child=serializers.JSONField(required=False), required=False)
    loans = serializers.ListField(child=serializers.JSONField(required=False), required=False)
    waiting = serializers.ListField(child=serializers.JSONField(required=False), required=False)
