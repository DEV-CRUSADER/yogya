from django.urls import path, include

from  dashboard.views.historical_index import HistoricalIndexAPIView
from  dashboard.views.contact_us.controller import ContactUsView


urlpatterns = [
    # get index-data (API routes for index data)
    path('get-index-data', HistoricalIndexAPIView.get_index_data, name='get-index-data'),
    path('add-new-index', HistoricalIndexAPIView.add_new_index_type, name='post_index_data_to_db'),
    path('get-index-list', HistoricalIndexAPIView.get_indexes_list, name='get-index-list'),
    path('get-test', HistoricalIndexAPIView.test_API, name='get-index-list'),

    # Email Routes API
    path('send-contact-mail', ContactUsView.send_email_to_us, name="sent-contact-mail"),
]