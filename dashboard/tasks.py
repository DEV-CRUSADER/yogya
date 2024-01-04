from __future__ import absolute_import, unicode_literals

from celery import shared_task
from celery.utils.log import get_task_logger
from dashboard.services.mailer.factory import mailer


logger = get_task_logger(__name__)


@shared_task
def send_contact_email_task(name, email, phone_number, message):
    logger.info("Sent contact email")
    return mailer.send_mail(
        'send_contact_email_task',
        name=name,
        email=email,
        phone_number=phone_number,
        message=message,
        is_async=False
    )