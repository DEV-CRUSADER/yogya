from django.urls import path, include

import dashboard.views.dashboard
import dashboard.views.historical_index
from dashboard.views.audit_log.controller import AuditLogAPIView


urlpatterns = [
    # Audit Log
    path('audit-log', AuditLogAPIView.list, name='audit-log'),

    # get index-data (routes for index data)
    path('get-index-data', dashboard.views.historical_index.HistoricalIndexAPIView.get_index_data, name='get-index-data'),
]