import datetime
import logging

from django.conf import settings
from django.contrib.auth import authenticate, login, get_user_model, logout
from django.contrib.auth.views import RedirectURLMixin
from django.core.exceptions import ValidationError
from django.forms import Form, CharField
from django.shortcuts import redirect, render
from django.utils.decorators import method_decorator
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode
from django.views.decorators.cache import never_cache
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
from dashboard.services.users import get_user_model, get_user_by_email
from dashboard.utils import TokenGenerator

from dashboard.services.accounts import CreateAccountSerializer, LoginSerializer, ForgotPasswordResetSerializer

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
            if AccountService.check_user_exists(form.cleaned_data['email']):
                return Response({"message": "User already exists"}, status=status.HTTP_400_BAD_REQUEST)
            business_member, user = AccountService.create(form.cleaned_data)
            if user.is_verified:
                return Response({"message": "User verified not required"}, status=status.HTTP_200_OK)
            mailer.send_mail('send_user_verification_email', business_member_id=business_member.id)
            return Response({"message": "User verification required"}, status=status.HTTP_200_OK)
        else:
            log.info("Registration failed!")
        return Response({"message": "Registration failed!"}, status=status.HTTP_400_BAD_REQUEST)
    

class SignUpUserVerificationView():
    
    @api_view(['GET'])
    def get(request, uidb64, bmid64, token):

        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            bmid = force_str(urlsafe_base64_decode(bmid64))
            user = get_user_model(uid=uid)
            business_member = BusinessMembers.objects.get(pk=bmid)

        except (TypeError, ValueError, OverflowError, User.DoesNotExist, BusinessMembers.DoesNotExist):
            user = None
            business_member = None

        if user is not None and business_member is not None and TokenGenerator(business_member).check_token(user, token):
            user.is_verified = True
            user.save()
            business_member.is_verified = True
            business_member.save()
            return redirect("client-login-page")
            return Response({"message": "User verified successfully"}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "User verification failed"}, status=status.HTTP_400_BAD_REQUEST)
        

class LoginView():

    @api_view(['POST'])
    def post(request):

        print(300*"*")
        log.info(f"Login request: {request.data}")
        print(300*"*")

        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():
            validated_data = serializer.validated_data

            if validated_data['email'] is None or validated_data['password'] is None:
                return Response({"status": False,"message": "Email and password required"}, status=status.HTTP_400_BAD_REQUEST)

            user = authenticate(request, email=validated_data['email'], password=validated_data['password'])

            if user is None:
                return Response({"status": False,"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)
            
            if not user.is_verified:
                return Response({"status": False,"message": "User not verified"}, status=status.HTTP_401_UNAUTHORIZED)
            
            if user.check_password(validated_data['password']):
                login(request, user)
                return Response({"status": True,"message": "Login successful"}, status=status.HTTP_200_OK)
            
            return Response({"status": False,"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({"status": False,"message": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

class CheckClientLoginView():

    @api_view(['GET'])
    def get(request):
        log.info(f"Check client login request: {request.user}")
        if request.user.is_authenticated:
            username = request.user.first_name + " " + request.user.last_name
            return Response({"status": True,"message": "User authenticated", "username" : username}, status=status.HTTP_200_OK)
        return Response({"status": False,"message": "User not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
    
class LogOutView():

    @api_view(['POST'])
    def post(request):
        log.info(f"Logging out {request.user}")
        logout(request)
        return Response({"status": True, "message": "User Logged Out"}, status=status.HTTP_200_OK)        
        
class ForgotPasswordResetView():

    @api_view(['POST'])
    def post(request):
        log.info(f"Forgot password reset request: {request.user}")

        serializer = ForgotPasswordResetSerializer(data=request.data)

        if serializer.is_valid():
            user = get_user_by_email(email=serializer.validated_data['email'])
            business_member = BusinessMembers.objects.get(user=user)

            log.info(f"User: {business_member}")

            if user is None:
                return Response({'message': "Email id not registered", "error": "Email id not registered"}, status=status.HTTP_400_BAD_REQUEST)
            return Response({'message': "Email sent successfully", "error": "Email sent successfully"}, status=status.HTTP_200_OK)
        else:
            return Response({"status" : False}, status=status.HTTP_400_BAD_REQUEST)