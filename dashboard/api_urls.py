from django.urls import path, include

import dashboard.views.dashboard
import dashboard.views.historical_index

from  dashboard.views.contact_us.controller import ContactUsView


urlpatterns = [
    # get index-data (API routes for index data)
    path('get-index-data', dashboard.views.historical_index.HistoricalIndexAPIView.get_index_data, name='get-index-data'),

    # Email Routes API
    path('send-contact-mail', ContactUsView.send_email_to_us, name="sent-contact-mail"),
]