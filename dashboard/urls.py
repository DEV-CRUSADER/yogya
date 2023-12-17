from django.urls import path, include
from django.contrib import admin

import dashboard.views.dashboard


urlpatterns = [
    path('', dashboard.views.dashboard.DashboardView.load_dashboard, name='dashboard'),
    path('/resources', dashboard.views.dashboard.DashboardView.load_dashboard, name='dashboard-resources'),
]