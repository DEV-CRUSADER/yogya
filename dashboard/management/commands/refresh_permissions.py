from django.core.management.base import BaseCommand

from dashboard.services.roles_and_permissions.permissions import permission_manager


class Command(BaseCommand):
    help = "Refreshes any newly added permissions"

    def handle(self, *args, **options):
        permission_manager.refresh_permissions_in_store()
        self.stdout.write(
            self.style.SUCCESS('Successfully updated permissions"')
        )
