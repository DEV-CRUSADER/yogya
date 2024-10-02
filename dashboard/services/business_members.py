import logging

from django.contrib.auth.models import Group
from django.db.models import Q

from rest_framework import serializers
from rest_framework.exceptions import APIException

from dashboard.models import User, BusinessMembers, Clients
from dashboard.pub_sub.event_producer import SystemEvent, EventType, EntityName
from dashboard.services.mailer.factory import mailer
from dashboard.services.roles_and_permissions.permissions import permission_manager
from dashboard.services.roles_and_permissions.roles import RoleService
from dashboard.services.users import get_user_by_email

ROLE_STAFF = "staff"
ROLE_CLIENT = "client"
ROLE_ADMIN = "admin"

valid_roles = [ROLE_ADMIN, ROLE_CLIENT, ROLE_STAFF]

log = logging.getLogger(__name__)


class BusinessMemberService:
    @staticmethod
    def get_user_permissions(user_id):
        business_members_query = BusinessMembers.objects.filter(user_id=user_id)

        if business_members_query.get().is_owner:
            return permission_manager.get_all_system_permissions()

        if business_members_query.get().is_owner:
            return permission_manager.get_all_system_permissions()

        individual_perms = [perm['permissions__id'] for perm in business_members_query.values('permissions__id')]
        role_based_perms = [perm['roles__permissions__id'] for perm in
                            business_members_query.values('roles__permissions__id')]

        log.info(f"User Perms : Individual {individual_perms} , RoleBase: {role_based_perms}")

        return permission_manager.get_permissions_by_ids(individual_perms + role_based_perms)
    

    @staticmethod
    def create(is_staff=None, is_client=None, is_owner=None, create_serializer_data=None, created_by_bm=None, user=None):

        business_members = BusinessMembers.objects.all_with_deleted().filter(user=user)

        if business_members.count() == 0:
            business_member = BusinessMembers.objects.create(user=user)
        else:
            business_member = business_members[0]
            business_member.deleted_at = None
            business_member.is_verified = False

        if create_serializer_data is not None:
            roles = create_serializer_data.get('roles', None)
            if roles is not None:
                business_member.roles.set(roles)

            permission = create_serializer_data.get('permissions', None)
            if permission is not None:
                business_member.permissions.set(permission)

            business_member.all_clients_access = create_serializer_data.get('all_clients_access', False)
            clients_accessible = create_serializer_data.get('clients_accessible', [])
            if clients_accessible:
                business_member.clients_accessible.set(clients_accessible)

        if is_client is not None:
            business_member.is_client = is_client
        if is_owner is not None:
            business_member.is_owner = is_owner
        if is_staff is not None:
            business_member.is_staff = is_staff

        business_member.save()
        log.info(f"Business Member Create : ID: {business_member.id}")

        if created_by_bm is None:
            # this will happen in the case of Business Owner being created
            created_by_bm = business_member

        SystemEvent(event_type=EventType.CREATE, entity_name=EntityName.CLIENT, entity_id=business_member.id,
                    business_member_id=created_by_bm.id, metadata={}).create()

        return business_member



def email_already_a_staff_or_admin(email):
    return BusinessMembers.objects.filter(user__email=email, group__name__in=[ROLE_ADMIN, ROLE_STAFF]).count() > 0


def get_staff_business_member_by_user(user_obj):
    return BusinessMembers.objects.filter(user=user_obj).filter(Q(is_staff=True) | Q(is_owner=True)).first()


def get_business_member_by_business_and_user(business, user):
    return BusinessMembers.objects.filter(user=user, business=business).first()


def get_all_business_member_by_business_and_user(business, user):
    return BusinessMembers.objects.filter(user=user, business=business)
