from django.contrib.auth.backends import ModelBackend
from django.core.exceptions import ValidationError

from dashboard.services.business_members import BusinessMemberService


class AuthModelBackend(ModelBackend):
    def get_all_permissions(self, user_obj, obj=None):
        return super().get_all_permissions(user_obj)

    def _get_group_permissions(self, user_obj):
        user_permissions = BusinessMemberService.get_user_permissions(user_id=user_obj.id)
        return user_permissions
