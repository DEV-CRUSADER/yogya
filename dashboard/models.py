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
    date_of_birth = models.DateField(null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

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
    display_name = models.CharField(max_length=200, null=True, blank=True)
    birthdate = models.DateField(null=True, blank=True)
    email = models.EmailField(null=False, blank=False)
    pancard = models.CharField(max_length=10, null=True, blank=True, unique=True)
    salary = models.FloatField(null=True, blank=True)
    phone_number = models.CharField(null=True, blank=True)
    current_knowledge = models.CharField(max_length=100, null=True, blank=True)
    current_occuption = models.CharField(max_length=256, null=True, blank=True)
    risk_tolerance = models.JSONField(default=dict)
    emergency_funds = models.FloatField(null=True, blank=True)   # to be changed to money field
    goals = ArrayField(models.CharField(max_length=200), null=True, blank=True)
    feedback = models.CharField(max_length=2000, null=True, blank=True)
    business_member = models.OneToOneField('dashboard.BusinessMembers', related_name='client',
                                    on_delete=models.DO_NOTHING, null=True)
    def __str__(self):
        return str(self.user.first_name) + " " + str(self.user.last_name)
        
    def total_loan_amount(self):
        if self.loan_set.exists():
            return sum(loan.amount for loan in self.loan_set.all())
        return 0
    
    def total_investment_amount(self):
        if self.investment_set.exists():
            return sum(investment.amount for investment in self.investment_set.all())
        return 0
    
    def is_waiting(self):
        return self.waiting_list.exists()
    
    def is_blocked(self):
        return self.blocked_clients.exists()

class Insurance(BaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type = models.CharField(max_length=100, null=False, blank=False)
    annual_premium = models.FloatField(null=False, blank=False)
    company_name = models.CharField(max_length=100, null=False, blank=False)
    scheme_name = models.CharField(max_length=100, null=False, blank=False)
    scheme_type = models.CharField(max_length=100, null=False, blank=False)
    sum_assured = models.FloatField(null=False, blank=False)
    client = models.ForeignKey(Clients, on_delete=models.DO_NOTHING, related_name="insurance", null=True, blank=True)

    def __str__(self):
        return f"{self.scheme_name} ({self.type} - {self.company_name})"


class Investment(BaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type = models.CharField(max_length=100, null=False, blank=False)
    amount = models.FloatField(null=False, blank=False)
    investment_date = models.DateField(null=False, blank=False)
    scheme_name = models.CharField(max_length=100, null=False, blank=False)
    debt_quality = models.CharField(max_length=100, null=False, blank=False)
    fixd_deposit = models.CharField(max_length=100, null=False, blank=False)
    market_value = models.FloatField(null=False, blank=False)
    portfolio = models.FloatField(null=False, blank=False)
    quantity = models.FloatField(null=False, blank=False)
    client = models.ForeignKey(Clients, on_delete=models.DO_NOTHING, related_name="investment", null=True, blank=True)

    def __str__(self):
        return f"{self.scheme_name} ({self.type})"
    

class Loan(BaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    loan_type = models.CharField(max_length=100, null=False, blank=False)
    amount = models.FloatField(null=False, blank=False)
    client = models.ForeignKey(Clients, on_delete=models.DO_NOTHING, related_name="loan", null=True, blank=True)


class ClientWaitingList(BaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.ForeignKey(Clients, on_delete=models.DO_NOTHING, related_name="waiting_list", null=True, blank=True)
    status = models.BooleanField(default=True)
    waiting_type = models.CharField(max_length=100, null=False, blank=False)

    def __str__(self):
        return f"{self.client.first_name} - {self.client.last_name}"


class BlockedUsers(BaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name="blocked_users", null=True, blank=True)

    def __str__(self):
        return f"{self.user.first_name} - {self.user.last_name}"


class BlockedClients(BaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    pancard = models.CharField(max_length=10, null=True, blank=True, unique=True)
    number = models.BigIntegerField(null=True, blank=True)

    def __str__(self):
        return f"{self.pancard} - {self.number}"


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


class ContactUS(BaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone_number = models.CharField()
    message = models.CharField(max_length=100000, null=True, blank=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"Name: {self.name}"
    

class IndexLists(BaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200, null=False, blank=False, unique=True)
    symbol = models.CharField(max_length=200, null=False, blank=False, unique=True)
    type = models.CharField(max_length=200, null=False, blank=False)

    def __str__(self):
        return f"Index Name: {self.name}"


class IndexDataFromNSE(BaseModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    symbol = models.ForeignKey(IndexLists, on_delete=models.DO_NOTHING, null=False, blank=False, related_name='index_data', default=None)
    index_name = models.CharField(max_length=200, null=False, blank=False)
    date = models.DateField(null=False, blank=False)
    pb = models.FloatField(null=False, blank=False)
    pe = models.FloatField(null=False, blank=False)
    divyield = models.FloatField(null=False, blank=False)

    def __str__(self):
        return f"Index Name: {self.index_name}"
