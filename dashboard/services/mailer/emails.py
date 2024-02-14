from celery import shared_task
from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes
from django.utils.html import strip_tags
from django.utils.http import urlsafe_base64_encode

from dashboard.models import User, Clients, BusinessMembers
from dashboard.services.mailer.factory import mailer
from dashboard.utils import TokenGenerator

@shared_task
def send_user_verification_email(business_member_id):
    business_member = BusinessMembers.objects.get(pk=business_member_id)

    mail_subject = 'Welcome to Yogya Capital'
    html_message = render_to_string('emails/signup-verification.html', {
        'user': business_member.user,
        'domain': settings.SITE_URL,
        'uid': urlsafe_base64_encode(force_bytes(business_member.user.pk)),
        'business_member_id': urlsafe_base64_encode(force_bytes(business_member.id)),
        'token': TokenGenerator(business_member).make_token(business_member.user),
    })
    plain_message = strip_tags(html_message)
    send_mail(mail_subject, plain_message, settings.SENDER_EMAIL, [business_member.user.email],
                   html_message=html_message)
    
@shared_task
def send_user_password_reset_email(business_member_id):
    business_member = BusinessMembers.objects.get(pk=business_member_id)

    mail_subject = 'Password reset | Yogya Capital'
    html_message = render_to_string('emails/forgot-password-reset.html', {
        'business_member': business_member,
        'domain': settings.SITE_URL,
        'uid': urlsafe_base64_encode(force_bytes(business_member.user.pk)),
        'business_member_id': urlsafe_base64_encode(force_bytes(business_member_id)),
        'token': TokenGenerator(business_member).make_token(business_member.user),
    })
    plain_message = strip_tags(html_message)
    send_mail(mail_subject, plain_message, settings.SENDER_EMAIL, [business_member.user.email],
                   html_message=html_message)

@shared_task
def send_contact_us_email(name, email, phone_number, message):
    mail_subject = 'Contact Us - Yogya Capital'
    html_message = render_to_string('emails/contact-us.html', {
        'name': name,
        'email': email,
        'phone_number': phone_number,
        'message': message,
    })
    plain_message = strip_tags(html_message)
    send_mail(
        mail_subject, 
        plain_message, 
        settings.SENDER_EMAIL, 
        [settings.SENDER_EMAIL],
        html_message=html_message,
    )

def register_all():
    mailer.register('send_user_verification_email', send_user_verification_email)
    mailer.register('send_contact_us_email', send_contact_us_email)
    mailer.register('send_user_password_reset_email', send_user_password_reset_email)

# @shared_task
# def send_bulk_files_download_email(requested_by_id, client_id, attachment=None, to_emails=None):
#     requested_by = BusinessMembers.objects.get(id=requested_by_id)
#     client = Clients.objects.get(id=client_id)

#     if not client.is_business:
#         mail_subject = f"Requested files for client {client.first_name} {client.last_name}"
#     else:
#         mail_subject = f"Requested files for client {client.company_name}"

#     html_message = render_to_string('emails/bulk-files-request.html', {
#         "requested_by": f"{requested_by.user.first_name} {requested_by.user.last_name}",
#         "client": f"{client.user.first_name} {client.user.last_name}"
#     })
#     plain_message = strip_tags(html_message)

#     email = mail.EmailMultiAlternatives(subject=mail_subject, body=plain_message,
#                                         from_email=settings.SENDER_EMAIL, to=to_emails)
#     email.attach_alternative(html_message, "text/html")
#     if attachment:
#         email.attach_file(attachment)
#     email.send()


