import logging
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