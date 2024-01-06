from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from dashboard.models import AuditLogs, BusinessMembers


class BusinessMemberSerializer(ModelSerializer):
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')

    class Meta:
        model = BusinessMembers
        fields = ['id', 'first_name', 'last_name']


class AuditLogSerializer(ModelSerializer):
    business_member = BusinessMemberSerializer()

    class Meta:
        model = AuditLogs
        fields = '__all__'
