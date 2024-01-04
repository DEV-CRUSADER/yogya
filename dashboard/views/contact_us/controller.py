import logging

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.contrib.auth.decorators import permission_required, login_required


log = logging.getLogger(__name__)


class ContactUsView(){

    @staticmethod
    def send_email_to_us(request){
        pass
    }
}