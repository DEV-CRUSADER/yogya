import datetime
import logging

from django.conf import settings
from django.contrib.auth import login, get_user_model
from django.contrib.auth.views import RedirectURLMixin
from django.core.exceptions import ValidationError
from django.forms import Form, CharField
from django.http import HttpResponseRedirect
from django.shortcuts import redirect, render
from django.utils.decorators import method_decorator
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode
from django.views import View
from django.views.decorators.cache import never_cache
from django.views.decorators.debug import sensitive_post_parameters
from django_otp.util import random_hex

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework import status

from dashboard.services.accounts import AccountService

from core.settings import SKIP_OTP

from dashboard.forms import RegistrationForm
from dashboard.models import BusinessMembers, User
from dashboard.services.mailer.factory import mailer
from dashboard.services.totp_verification import generate_otp_by_key, verify_otp_by_key
from dashboard.services.users import get_user_model
from dashboard.utils import TokenGenerator

from dashboard.services.accounts import CreateAccountSerializer

log = logging.getLogger(__name__)

INTERNAL_RESET_SESSION_TOKEN = "_password_reset_token"
RESET_URL_TOKEN = "set-password"
RESET_PASSWORD = 'reset_password'


class SignUpView():

    @api_view(['POST'])
    def post(request):

        form_data = CreateAccountSerializer(request.data).data
        form = RegistrationForm(form_data)

        log.info(f"Registration form: {form}")
        if form.is_valid():
            business_member, user = AccountService.create(form.cleaned_data)
            if user.is_verified:
                return Response({"message": "User verified not required"}, status=status.HTTP_200_OK)
            mailer.send_mail('send_user_verification_email', business_member_id=business_member.id)
            return Response({"message": "User verification required"}, status=status.HTTP_200_OK)
        else:
            log.info("Registration failed!")
        return Response({"message": "Registration failed!"}, status=status.HTTP_400_BAD_REQUEST)
