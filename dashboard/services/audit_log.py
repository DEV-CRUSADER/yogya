import logging

from dashboard.models import AuditLogs
from dashboard.pub_sub.event_producer import SystemEvent

log = logging.getLogger(__name__)


class AuditLogService:
    @staticmethod
    def create(event: SystemEvent):
        log.info(f"Audit Log Service: Event: {event}")
        AuditLogs.objects.create(event_type=event.event_type, business_member_id=event.business_member_id,
                                entity_id=event.entity_id, entity_name=event.entity_name, metadata=event.metadata)

    @staticmethod
    def list(entity_name, entity_id):
        log.info(
            f"Audit Log Service: List: BusinessId: EntityName: {entity_name}, EntityId: {entity_id}")

        query = AuditLogs.objects.all()
        if entity_name:
            query = query.filter(entity_name=entity_name)
        if entity_id:
            query = query.filter(entity_id=entity_id)

        return query
