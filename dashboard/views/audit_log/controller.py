from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK

from dashboard.services.audit_log import AuditLogService
from dashboard.views.audit_log.serializer import AuditLogSerializer


class AuditLogAPIView:
    
    @staticmethod
    @api_view(['GET'])
    def list(request):
        audit_logs = AuditLogService.list(entity_name=request.data.get('entity_name', None),
                                          entity_id=request.data.get('entity_id', None))
        return Response(AuditLogSerializer(audit_logs, many=True).data, HTTP_200_OK)
