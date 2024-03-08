from django.contrib.auth.tokens import PasswordResetTokenGenerator
import six


class TokenGenerator(PasswordResetTokenGenerator):
    business_member = None

    def __init__(self, business_member):
        super().__init__()
        self.business_member = business_member

    def _make_hash_value(self, user, timestamp):
        # this will be used both for Confirming Email and for Confirming Staff Invitation + Password Reset flows.
        # This hash value will change
        login_timestamp = '' if user.last_login is None else user.last_login.replace(microsecond=0, tzinfo=None)

        return six.text_type(user.pk) + six.text_type(timestamp) + str(
            login_timestamp) + user.password + str(user.is_verified) + str(self.business_member.is_verified)
