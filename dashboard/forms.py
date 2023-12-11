from admin_volt.forms import LoginForm

from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

from dashboard.models import User

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

    mobile_number= forms.CharField(
        label=_("Mobile Number"),
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Mobile Number'}),
    )

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'phone_number')


class CustomLoginForm(LoginForm):
    
    error_messages = {
        **AuthenticationForm.error_messages,
        "verification_required": _(
            "Please complete Email Verification before attempting login."
        ),
    }
    required_css_class = "required"