import logging

from rest_framework import serializers
from dashboard.services.mailer.factory import mailer
from dashboard.models import ContactUS

log = logging.getLogger(__name__)

class ContactUsSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100, required=True)
    email = serializers.EmailField(required=True)
    phone_number = serializers.CharField(required=True, max_length=15)
    message = serializers.CharField(max_length=100, required=True)


class ContactUsService():

    @staticmethod
    def send_contact_email(name, email, phone_number, message):

        log.info(f"Service send_contact_email")

        instance = ContactUS(
            name=name,
            email=email,
            phone_number=phone_number,
            message=message
        )
        instance.save()
        log.info(f"ContactUs instance saved.=> {instance}")

        mailer.send_mail(
            'send_contact_us_email',
            name=name,
            email=email,
            phone_number=phone_number,
            message=message
        )

        return {
            "status": "True",
            "message": "We have received you message, We will contact you soon."
        }