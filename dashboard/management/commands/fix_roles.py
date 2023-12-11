from django.core.management.base import BaseCommand

from dashboard.models import BusinessMembers
from dashboard.services.roles_and_permissions.roles import RoleService


class Command(BaseCommand):
    help = "Fixes Roles all around"

    def handle(self, *args, **options):
        bms = BusinessMembers.objects.all()
        for bm in bms:

            if not bm.group:
                continue

            if bm.group.name == "client":
                bm.is_client = True

            if bm.group.name == "admin":
                bm.is_owner = True

            bm.roles.set([bm.business.roles.filter(name='Admin')[0]])
            bm.save()

        # owner = BusinessMembers.objects.get(is_owner=True)
        # RoleService.generate_default_roles(creating_bm=owner)

