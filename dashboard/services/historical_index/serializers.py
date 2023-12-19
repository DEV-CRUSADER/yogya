import logging
import uuid
from datetime import datetime

from rest_framework import serializers
from rest_framework.exceptions import ValidationError


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


class StockMetricsSerializer(serializers.Serializer):
    SDM2 = serializers.ListField(child=serializers.FloatField())
    SDM1 = serializers.ListField(child=serializers.FloatField())
    SD = serializers.ListField(child=serializers.FloatField())
    SDP1 = serializers.ListField(child=serializers.FloatField())
    SDP2 = serializers.ListField(child=serializers.FloatField())
    standard = serializers.ListField(child=serializers.FloatField())


class StockDataResponseSerializer(serializers.Serializer):
    symbol = serializers.CharField()
    date = serializers.ListField(child=serializers.CharField())
    pb = StockMetricsSerializer()
    pe = StockMetricsSerializer()
    divYield = StockMetricsSerializer()
