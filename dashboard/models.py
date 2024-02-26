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
    name = models.CharField()
    description = models.CharField(max_length=200, null=True, blank=True)
    permissions = models.ManyToManyField(Permission, related_name="roles")


class AuditLogs(models.Model):
    business_member = models.ForeignKey(BusinessMembers, on_delete=models.DO_NOTHING, related_query_name="audit_logs",
                                        null=False)
    event_type = models.CharField(null=False)
    entity_name = models.CharField(null=False)
    entity_id = models.UUIDField(null=False)
    metadata = models.JSONField(default=dict)
    event_time = models.DateTimeField(auto_now=False, auto_now_add=True)
    
class ClientFormData(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    phone_number = models.BigIntegerField(null=True, blank=True)
    DOB = models.DateField(null=True, blank=True)
    email = models.EmailField(null=False, blank=False)
    pancard = models.CharField(max_length=100, null=True, blank=True)
    current_occupation = models.CharField(max_length=100, null=True, blank=True)
    salary = models.BigIntegerField(null=True, blank=True)
    current_knowledge = models.CharField(max_length=100, null=True, blank=True)
    goals = models.CharField(max_length=100, null=True, blank=True)
    risk_tolarance_low = models.DecimalField(default=False, max_digits=5, decimal_places=2)
    risk_tolarance_mid = models.DecimalField(default=False, max_digits=5, decimal_places=2)
    risk_tolarance_high = models.DecimalField(default=False, max_digits=5, decimal_places=2)
    improve = models.CharField(max_length=100, null=True, blank=True)
    
    
class Investment(models.Model):
    client = models.ForeignKey(ClientFormData, on_delete=models.CASCADE, related_name='investments')
    type = models.CharField(max_length=100)  # E.g., stocks, mutual funds, FD, etc.
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    fixed_deposit = models.BooleanField(default=False)
    market_value = models.DecimalField(max_digits=10, decimal_places=2)
    portfolio = models.CharField(max_length=100)
    quantity = models.IntegerField(null=True, blank=True)
    scheme_name = models.CharField(max_length=100)
    
class Loan(models.Model):
    client = models.ForeignKey(ClientFormData, on_delete=models.CASCADE, related_name='loans')
    type = models.CharField(max_length=100)  # E.g., home loan, car loan, personal loan, etc.
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    interest_rate = models.DecimalField(max_digits=5, decimal_places=2)
    # Add more fields as needed for loan details
    
class Insurance(models.Model):
    client = models.ForeignKey(ClientFormData, on_delete=models.CASCADE, related_name='insurances')
    type = models.CharField(max_length=100)  # E.g., health insurance, term insurance, etc.
    annual_premium = models.DecimalField(max_digits=10, decimal_places=2)
    company_name = models.CharField(max_length=100)
    scheme_name = models.CharField(max_length=100)
    scheme_type = models.CharField(max_length=100)
    sum_assured = models.DecimalField(max_digits=10, decimal_places=2)
    # Add more fields as needed for insurance details