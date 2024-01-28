import logging
from random import randint

from rest_framework import serializers

from dashboard.models import User
from dashboard.services.business_members import BusinessMemberService
from dashboard.services.roles_and_permissions.roles import RoleService
from dashboard.services.users import get_user_by_email

log = logging.getLogger(__name__)



class CreateAccountSerializer(serializers.Serializer):
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=False)
    email = serializers.CharField(required=True)
    phone_number = serializers.CharField(required=False)
    password1 = serializers.CharField(required=True)
    password2 = serializers.CharField(required=True)

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError("Passwords do not match")
        return data



class AccountService:

    @staticmethod
    def create(create_form_data):
        log.info( f"Creating a new user, data: {create_form_data}")

        user = get_user_by_email(create_form_data['email'])
        if user is None:
            user = User.objects.create_user(first_name=create_form_data['first_name'],
                                            last_name=create_form_data.get('last_name', ''),
                                            email=create_form_data['email'],
                                            phone_number=create_form_data.get('phone_number', None),
                                            password=create_form_data['password1'])

        business_member = BusinessMemberService.create(user=user, is_owner=True)

        # Create Default Roles
        RoleService.generate_default_roles(creating_bm=business_member)

        log.info(
            f"Business Created, Owner: {user.id}, business_member_id: {business_member.id}")
        return business_member, user