from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

from dashboard.models import User
from dashboard.services.business_members import email_already_a_staff_or_admin, get_staff_business_member_by_user

class RegistrationForm(UserCreationForm):
    password1 = forms.CharField(
        label=_("Password"),
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Password'}),
    )
    password2 = forms.CharField(
        label=_("Confirm Password"),
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Confirm Password'}),
    )

    first_name = forms.CharField(
        label=_("First Name"),
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'First Name'}),
    )

    last_name = forms.CharField(
        label=_("Last Name"),
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Last Name'}),
    )

    email = forms.CharField(
        label=_("Business Email"),
        widget=forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Business Email'}),
    )

    phone_number= forms.CharField(
        label=_("Mobile Number"),
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Mobile Number'}),
    )

    def clean(self):
        if email_already_a_staff_or_admin(self.cleaned_data['email']):
            raise ValidationError({"email": "Email already registered. Please login to continue."})

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'phone_number')


class ClientResetPasswordForm(forms.Form):
    
    new_password1 = forms.CharField(
        label=_("New Password"),
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'New Password'}),
    )

    new_password2 = forms.CharField(
        label=_("Confirm New Password"),
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Confirm New Password'}),
    )

    def clean(self):
        cleaned_data = super().clean()
        if cleaned_data.get('new_password1') != cleaned_data.get('new_password2'):
            raise ValidationError({"new_password2": "Passwords do not match."})
