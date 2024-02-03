from dashboard.models import User


def get_user_model(uid):
    return User.objects.get(id=uid)


def get_user_by_email(email):
    try:
        return User.objects.get(email=email)
    except User.DoesNotExist:
        return None
