from django.urls import path, include
from django.contrib import admin
# from dashboard.views import submitForm

import dashboard.views.dashboard
import dashboard.views.historical_index


urlpatterns = [
    path('', dashboard.views.dashboard.DashboardView.load_dashboard, name='dashboard'),
    path('/resources', dashboard.views.dashboard.DashboardView.load_dashboard, name='dashboard-resources'),

    path("api/v1/", include('dashboard.api_urls')),
    # path('submitForm/', submitForm.submitForm, name='submitForm'),
    
    ]