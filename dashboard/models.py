import datetime
import random
import string
import uuid

from django.contrib.auth.models import AbstractUser, Group, Permission
from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.db.models import FloatField
from django.utils.translation import gettext_lazy as _
from softdelete.models import SoftDeleteObject

from dashboard.managers import CustomUserManager


class TimeStampModel(models.Model):
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class BaseModel(TimeStampModel, SoftDeleteObject):
    class Meta:
        abstract = True


def generate_id():
    return ''.join(random.choices(string.ascii_uppercase +
                                  string.digits, k=14))


class User(AbstractUser, BaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = None
    email = models.EmailField(_('email address'), unique=True)
    is_verified = models.BooleanField(_('is_verified'), default=False)
    phone_number = models.CharField(max_length=20, null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    groups = models.ManyToManyField(Group, blank=True, related_name='user_set_related')
    user_permissions = models.ManyToManyField(Permission, blank=True, related_name='user_set_related')

    class Meta:
        unique_together = ('email',)

    def __str__(self):
        return str(self.first_name) + " " + str(self.last_name)
    

class BusinessMembers(BaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    group = models.ForeignKey(Group, on_delete=models.DO_NOTHING, null=True)
    roles = models.ManyToManyField('dashboard.Roles', related_name='member_roles')
    permissions = models.ManyToManyField(Permission, related_name='member_permissions')
    is_verified = models.BooleanField(default=False)
    is_client = models.BooleanField(default=False)
    is_owner = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    all_clients_access = models.BooleanField(default=False)
    clients_accessible = models.ManyToManyField('dashboard.Clients', related_name='staffs')

    class Meta:
        unique_together = ('user',)

    def __str__(self):
        return f"{self.user.__str__()}"
    

class Clients(BaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    display_name = models.CharField(max_length=100, null=True, blank=True)
    client_portal_enabled = models.BooleanField(default=False)
    birthdate = models.DateField(null=True, blank=True)
    email = models.EmailField(null=False, blank=False)
    phone_number = models.BigIntegerField(null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    business_member = models.OneToOneField('dashboard.BusinessMembers', related_name='client',
                                           on_delete=models.DO_NOTHING, null=True)
    def __str__(self):
        if self.is_business:
            return f"{self.company_name}"
        else:
            return str(self.user.first_name) + " " + str(self.user.last_name)
        

class Roles(BaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200, null=True, blank=True)
    permissions = models.ManyToManyField(Permission, related_name="roles")


class AuditLogs(models.Model):
    business_member = models.ForeignKey(BusinessMembers, on_delete=models.DO_NOTHING, related_query_name="audit_logs",
                                        null=False)
    event_type = models.CharField(null=False, max_length=1000)
    entity_name = models.CharField(null=False, max_length=1000)
    entity_id = models.UUIDField(null=False)
    metadata = models.JSONField(default=dict)
    event_time = models.DateTimeField(auto_now=False, auto_now_add=True)


class NSEIndexData(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    symbol = models.CharField(max_length=100, null=False, blank=False)
    name = models.CharField(max_length=100, null=False, blank=False)
    date = models.DateField(null=False, blank=False)
    pe = models.FloatField(null=True, blank=True)
    pb = models.FloatField(null=True, blank=True)
    div_yield = models.FloatField(null=True, blank=True)