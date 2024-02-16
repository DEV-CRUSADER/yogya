from pathlib import Path
import os
import sys
from dotenv import load_dotenv
import logging.config

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

APP_ENV = os.getenv('APP_ENV', 'dev')
env_path = ''
env_path = ''
if APP_ENV == 'dev':
    env_path = 'env/.dev'
elif APP_ENV == 'prod':
    env_path = 'env/.prod'

env_path = os.path.join(BASE_DIR, env_path)

load_dotenv(env_path) # take environment variables from .env.

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY')

DEBUG = os.getenv("DEBUG", 'False') == 'True'

ALLOWED_HOSTS = [
        'yogyacapital.com',
        'www.yogyacapital.com',
        'dashboard.yogyacapital.com',
        'localhost:8000',
        'dashboard.localhost:8000',
    ]

CSRF_TRUSTED_ORIGINS = [
    "http://127.0.0.1",
    "http://localhost"
    "http://dashboard.localhost"
    "http://dashboard.localhost:8000",
    "http://yogyacapital.com",
    "http://www.yogyacapital.com",
    "http://dashboard.yogyacapital.com",

    "https://yogyacapital.com",
    "https://www.yogyacapital.com",
    "https://dashboard.yogyacapital.com",
]

RENDER_EXTERNAL_HOSTNAME = os.environ.get('RENDER_EXTERNAL_HOSTNAME')
if RENDER_EXTERNAL_HOSTNAME:
    ALLOWED_HOSTS.append(RENDER_EXTERNAL_HOSTNAME)

# Application definition
INSTALLED_APPS = [
    'jazzmin',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'dashboard',
    'django_hosts',
    "softdelete",
    "rest_framework",
    "django_otp",
    "django.contrib.sites",
    "django.contrib.sitemaps",
    "robots",
]

MIDDLEWARE = [
    "log_request_id.middleware.RequestIDMiddleware",
    'django_hosts.middleware.HostsRequestMiddleware',
    'django.middleware.security.SecurityMiddleware',
    "whitenoise.middleware.WhiteNoiseMiddleware",
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django_hosts.middleware.HostsResponseMiddleware',
]

ROOT_URLCONF = "core.urls"
ROOT_HOSTCONF = "core.hosts"
DEFAULT_HOST = "core"

REST_FRAMEWORK = {
    'EXCEPTION_HANDLER': 'core.custom_exception_handler.custom_exception_handler',
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
    ]
}

DASHBOARD_TEMPLATES = os.path.join(BASE_DIR, 'dashboard', 'templates')
CORE_TEMPALTES = os.path.join(BASE_DIR, 'core', 'templates', 'core')

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            DASHBOARD_TEMPLATES,
            CORE_TEMPALTES,
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# Logger
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "console": {
            "format": "{levelname} {asctime} request_id=%(request_id)s {pathname} - line {lineno}: {message}",
            "style": "{",
        },
        "json": {
            "()": "core.json_logger.CustomisedJSONFormatter",
        },
    },
    "filters": {
        "request_id": {
            '()': 'log_request_id.filters.RequestIDFilter'
        }
    },
    "handlers": {
        "console": {
            "level": "DEBUG",
            "class": "logging.StreamHandler",
            "filters": ["request_id"],
            "formatter": "json",
            "stream": sys.stdout,
        },
    },
    "loggers": {
        # "django.db.backends": {
        #     "level": "DEBUG",
        #     "handlers": ["console"],
        #     "propagate": False,
        # },
        "": {
            "level": "DEBUG",
            "handlers": ["console"],
            "propagate": True,
        },
    },
}

logging.config.dictConfig(LOGGING)

WSGI_APPLICATION = 'core.wsgi.application'

SITE_ID = int(os.getenv('SITE_ID'))
SITE_URL = os.getenv('SITE_URL')
DOMAIN_NAME = os.getenv('DOMAIN_NAME')
SITE_NAME = os.getenv('SITE_NAME')
PROTOCOL = os.getenv('PROTOCOL', 'http')
BASE_URL = f"{PROTOCOL}://{SITE_URL}"
DASHBOARD_URL = f"{PROTOCOL}://dashboard.{SITE_URL}"
PARENT_HOST = SITE_URL


# Database
DB_ENGINE = os.getenv('DB_ENGINE', None)
DB_USERNAME = os.getenv('DB_USERNAME', None)
DB_PASS = os.getenv('DB_PASS', None)
DB_HOST = os.getenv('DB_HOST', None)
DB_PORT = os.getenv('DB_PORT', None)
DB_NAME = os.getenv('DB_NAME', None)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.' + DB_ENGINE,
        'NAME': DB_NAME,
        'USER': DB_USERNAME,
        'PASSWORD': DB_PASS,
        'HOST': DB_HOST,
        'PORT': DB_PORT,
    },
}

# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static/')

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

DASHBOARD_LOGIN_REDIRECT_URL = 'dashboard'

# Email settings
EMAIL_BACKEND = os.environ.get('EMAIL_BACKEND')
EMAIL_HOST = os.environ.get('EMAIL_HOST')
EMAIL_USE_TLS = os.environ.get('EMAIL_USE_TLS')
EMAIL_PORT = os.environ.get('EMAIL_PORT')

EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')

SENDER_EMAIL = os.environ.get('SENDER_EMAIL')
DEFAULT_FROM_EMAIL = os.environ.get('DEFAULT_FROM_EMAIL')

# ASGI
ASGI_APPLICATION = "core.asgi.application"

# Thread Pool
THREAD_POOL_SIZE = 2

# USER AUTHENTICATION
AUTH_USER_MODEL = 'dashboard.User'
AUTHENTICATION_BACKENDS = [
    # 'django.contrib.auth.backends.ModelBackend',
    "core.backends.AuthModelBackend.AuthModelBackend"
]
LOGIN_REDIRECT_URL = '/resources'
DASHBOARD_LOGIN_REDIRECT_URL = '/'

# DEBUGGING
ASYNC_EMAILS = os.getenv('ASYNC_EMAILS', "True") == 'True'
SKIP_OTP = os.getenv('SKIP_OTP', "True") == 'True'


# JAZZMIN CONFIGURATIONS
JAZZMIN_SETTINGS = {
    "site_title": "Dashboard",
    "site_header": "Yogya Capital",
    "site_brand": "Yogya Capital",
    "site_logo_classes": "img-circle",
    "welcome_sign": "Yogya Capital Admin Portal",
    "copyright": "&copy; Yogya Capital",
    "search_model": ["auth.User", "auth.Group"],
    "usermenu_links": [
        {"model": "auth.user"}
    ],
    "show_sidebar": True,
    "navigation_expanded": True,
    "hide_apps": [],
    "hide_models": [],
    "icons": {
        "auth": "fas fa-users-cog",
        "auth.user": "fas fa-user",
        "auth.Group": "fas fa-users",
    },
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",
    "related_modal_active": False,
    "custom_css": None,
    "custom_js": None,
    "use_google_fonts_cdn": True,
    "show_ui_builder": False,
    "changeform_format": "horizontal_tabs",
    "changeform_format_overrides": {"auth.user": "collapsible", "auth.group": "vertical_tabs"},
}