"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path

from dashboard.services.mailer.emails import register_all
import dashboard.views.accounts
from .views import load_404, load_homepage, login_required

from django.contrib.sitemaps.views import sitemap
from dashboard.sitemap import YogyacapitalSitemap

import core.views

sitemaps = {
    'yogyacapital.com': YogyacapitalSitemap,
}

app_name = 'core'

urlpatterns = [

    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
    path('robots.txt', include('robots.urls'), name='robots'),

    path('admin/', admin.site.urls),
<<<<<<< HEAD
    path("", core.views.CoreView.load_homepage, name="home-page"),
    path("resources/", core.views.CoreView.load_homepage, name="resources-page"),
    path("mutual-funds/", core.views.CoreView.load_homepage, name="resources-page"),
    path("contact/", core.views.CoreView.load_homepage, name="resources-page"),

    # temporary
    path("forms/", core.views.CoreView.load_homepage, name="client-page"),
=======
    path("", core.views.load_homepage, name="home-page"),
    path("resources/", core.views.load_homepage, name="resources-page"),
    path("mutual-funds/", core.views.load_homepage, name="resources-page"),
    path("contact/", core.views.load_homepage, name="resources-page"),
    path("register/", core.views.load_homepage, name="client-register-page"),
    path("login/", core.views.load_homepage, name="client-login-page"),
    path("password-reset/", core.views.load_homepage, name="client-password-reset-page"),
>>>>>>> master

    path("api/v1/", include('dashboard.api_urls')),
    path("dashboard/", include('dashboard.urls')),

    path("login-required/", core.views.login_required, name="login-required"),
    path("accounts/reset-password/<uidb64>/<bmid64>/<token>/", dashboard.views.accounts.PasswordResetView.as_view(), name="client-reset-password"),
]

def register_functions():
    register_all()


register_functions()