import logging
import uuid
from datetime import datetime

from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from dashboard.models import IndexLists


log = logging.getLogger(__name__)


class NullableUUIDField(serializers.Field):
    def to_internal_value(self, data):
        if data in ('', None):
            return None  # Allow empty string or None as null values
        try:
            # Validate that the data is a valid UUID
            return uuid.UUID(data)
        except (ValueError, AttributeError, TypeError):
            raise serializers.ValidationError('Must be a valid UUID.')

    def to_representation(self, value):
        if value is None:
            return None
        return str(value)
    

class HistoricalIndexFormSerializer(serializers.Serializer):
    symbol = serializers.CharField(required=True, max_length=100)
    start_date = serializers.DateField(required=True)
    end_date = serializers.DateField(required=True)


class CustomDateField(serializers.Field):
    def to_representation(self, value):
        return value.strftime('%d %b %Y')

    def to_internal_value(self, data):
        try:
            return datetime.strptime(data, '%d %b %Y').date()
        except ValueError:
            raise serializers.ValidationError('Invalid date format. Use "DD Mon YYYY" format.')


class StockDataSerializer(serializers.Serializer):
    symbol = serializers.CharField()
    data = serializers.ListField(child=serializers.DateField(format="%d %b %Y"))
    pb = serializers.DictField()
    pe = serializers.DictField()
    divYield = serializers.DictField()

class IndexSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndexLists
        fields = ["name", "symbol", "type"]

class GetIndexSerializer(serializers.Serializer):
    name = serializers.CharField()
    symbol = serializers.CharField()
    type = serializers.CharField()