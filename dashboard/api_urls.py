from django.urls import path, include

from dashboard.views.historical_index import HistoricalIndexAPIView
from dashboard.views.contact_us.controller import ContactUsView
from dashboard.views.clients.controller import ClientsAPIView, InsuranceCreateAPIView

from dashboard.views.accounts import SignUpView, LoginView, CheckClientLoginView, \
    LogOutView, ForgotPasswordResetView


urlpatterns = [
    # get index-data (API routes for index data)
    path('get-first-index-data', HistoricalIndexAPIView.get_first_index_data, name='get-first-index-data'),
    path('get-index-data', HistoricalIndexAPIView.get_index_data, name='get-index-data'),
    path('add-new-index', HistoricalIndexAPIView.add_new_index_type, name='post_index_data_to_db'),
    path('get-index-list', HistoricalIndexAPIView.get_indexes_list, name='get-index-list'),
    path('get-test', HistoricalIndexAPIView.test_API, name='get-index-list'),

    # Email Routes API
    path('send-contact-mail', ContactUsView.send_email_to_us, name="sent-contact-mail"),

    # User Authentication APIs
    path('account/register', SignUpView.post, name="register-user"),
    path('account/login', LoginView.post, name="login-user"),
    path('account/check-auth', CheckClientLoginView.get, name="check-auth"),
    path('account/logout', LogOutView.post, name="logout-user"),
    path('account/reset-password', ForgotPasswordResetView.post, name="reset-password"),

    # Client APIs
    path('client/create', ClientsAPIView.create_client_view, name="create-client"),
    path('clients/get-clients', ClientsAPIView.get_clients_view, name="get-clients"),
    path('client/<uuid:client_id>', ClientsAPIView.get_client_view, name="get-client"),


    # Client Other Information APIs
    path('clients/create-insurance', InsuranceCreateAPIView.CreateInsurance, name="create-insurance"),
]