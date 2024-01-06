import logging

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.contrib.auth.decorators import permission_required, login_required

from dashboard.services.contact_us import ContactUsSerializer
from dashboard.services.contact_us import ContactUsService


log = logging.getLogger(__name__)


class ContactUsView():

    @staticmethod
    @api_view(['POST'])
    def send_email_to_us(request):
        log.info(f"Starting the message.=> {request.data}")
        
        serializer = ContactUsSerializer(data=request.data)

        if serializer.is_valid():
            validated_data = serializer.validated_data

            respone = ContactUsService.send_contact_email(
                name=validated_data['name'], 
                email=validated_data['email'],
                phone_number=validated_data['phone_number'],
                message=validated_data['message']
            )

            return Response(respone, status=200)
        else:
            return Response({"status": serializer.errors}, status=400)
