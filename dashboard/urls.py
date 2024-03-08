from django.urls import path, include
from django.contrib import admin
from dashboard.views import submitForm

import dashboard.views.dashboard
import dashboard.views.accounts
import dashboard.views.historical_index
import dashboard.views.contact_us.controller

app_name = 'dashboard'

urlpatterns = [
    path('', dashboard.views.dashboard.DashboardView.load_dashboard, name='dashboard'),
    path('resources/', dashboard.views.dashboard.DashboardView.load_dashboard, name='dashboard-resources'),

    path("api/v1/", include('dashboard.api_urls')),
<<<<<<< HEAD
    path('submitForm/', submitForm.submitForm, name='submitForm'),
    
    ]
=======

    # Authentication Routes
    path( 'accounts/activate/<uidb64>/<bmid64>/<token>/', dashboard.views.accounts.SignUpUserVerificationView.get, name="activate"),
    path( 'accounts/reset-password', dashboard.views.accounts.PasswordResetView.as_view(), name="reset-password" )
]
>>>>>>> master
