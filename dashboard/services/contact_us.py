from dashboard.tasks import send_contact_email_task


class ContactUsService():
    def __init__(self, name, email, phone_number, message):
        self.name = name
        self.email = email
        self.phone_number = phone_number
        self.message = message

    def send_contact_email(self):
        send_contact_email_task.delay(
            self.name, self.email, self.phone_number, self.message)