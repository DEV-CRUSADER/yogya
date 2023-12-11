import logging

from dashboard.pub_sub.pub_sub import topic_manager
from dashboard.services.audit_log import AuditLogService

log = logging.getLogger(__name__)


def worker(message):
    log.info(f"AuditLogWorker: {message}")
    AuditLogService.create(message)


def init_worker():
    topic_manager.TOPIC_CLIENT_EVENTS.add_subscriber(worker)
    topic_manager.TOPIC_ROLE_EVENTS.add_subscriber(worker)
    topic_manager.TOPIC_BLOGS_EVENTS.add_subscriber(worker)
