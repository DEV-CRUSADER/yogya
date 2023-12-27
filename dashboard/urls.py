from django.urls import path, include
from django.contrib import admin

import dashboard.views.dashboard
import dashboard.views.historical_index

# from dashboard.pub_sub.audit_log_worker import init_worker


urlpatterns = [
    path('', dashboard.views.dashboard.DashboardView.load_dashboard, name='dashboard'),
    path('/resources', dashboard.views.dashboard.DashboardView.load_dashboard, name='dashboard-resources'),

    path("api/v1/", include('dashboard.api_urls')),
]

# def startup():
#     init_worker()

# startup()