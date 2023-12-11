from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType

CustomPermissionContentType = "custom_permission"


class Module:
    CLIENTS = 'Clients'
    ROLES = 'Roles'
    BLOGS = 'Blogs'

    ALL_MODULES = [CLIENTS, ROLES, BLOGS]


class PERM:
    name = ''
    module = ''
    codename = ''

    def key(self):
        return f"{CustomPermissionContentType}.{self.codename}"

    def __init__(self, name, module, codename):
        self.codename = codename
        self.name = name
        self.module = module

class PermissionManager:
    
    # Clients
    CLIENTS_CREATE = PERM(name='Create', module=Module.CLIENTS, codename='clients.create')
    CLIENTS_EDIT = PERM(name='Edit', module=Module.CLIENTS, codename='clients.edit')
    CLIENTS_DELETE = PERM(name='Delete', module=Module.CLIENTS, codename='clients.delete')
    CLIENTS_VIEW = PERM(name='View', module=Module.CLIENTS, codename='clients.view')

    # Roles
    ROLES_CREATE = PERM(name='Create', module=Module.ROLES, codename='roles.create')
    ROLES_VIEW = PERM(name='View', module=Module.ROLES, codename='roles.view')
    ROLES_EDIT = PERM(name='Edit', module=Module.ROLES, codename='roles.edit')
    ROLES_DELETE = PERM(name='Delete', module=Module.ROLES, codename='roles.delete')

    # Blogs
    BLOGS_CREATE = PERM(name='Create', module=Module.BLOGS, codename='blobs.create')
    BLOGS_EDIT = PERM(name='Edit', module=Module.BLOGS, codename='blobs.edit')
    BLOGS_DELETE = PERM(name='Delete', module=Module.BLOGS, codename='blobs.delete')
    BLOGS_VIEW = PERM(name='View', module=Module.BLOGS, codename='blobs.view')


    ALL_PERMS = [
        CLIENTS_CREATE,
        CLIENTS_EDIT,
        CLIENTS_DELETE,
        CLIENTS_VIEW,
        ROLES_CREATE,
        ROLES_EDIT,
        ROLES_DELETE,
        ROLES_VIEW,
        BLOGS_CREATE,
        BLOGS_EDIT,
        BLOGS_DELETE,
        BLOGS_VIEW
    ]

    ALL_PERM_CODES = [perm.codename for perm in ALL_PERMS]
    CODES_TO_PERM = {p.codename: p for p in ALL_PERMS}
    CODES_TO_MODULE_NAME = {p.codename: p.module for p in ALL_PERMS}

    def get_permissions_by_ids(self, ids):
        return Permission.objects.filter(pk__in=ids)

    def get_name_by_ids(self, ids):
        return [perm['codename'] for perm in Permission.objects.filter(pk__in=ids).values('codename')]
    
    def refresh_permissions_in_store(self):
        # Ensure content type exists
        content_type, created = ContentType.objects.get_or_create(app_label=CustomPermissionContentType)

        db_perm_list = [p['codename'] for p in
                        Permission.objects.filter(content_type__app_label=CustomPermissionContentType).values(
                            'codename')]
        current_perm_codes = self.ALL_PERM_CODES
        new_perm_list = [p for p in current_perm_codes if p not in db_perm_list]

        content_type = ContentType.objects.get(app_label=CustomPermissionContentType)

        for perm_code in new_perm_list:
            perm = self.CODES_TO_PERM[perm_code]
            Permission.objects.create(name=perm.name, codename=perm.codename,
                                      content_type=content_type)

    def get_all_system_permissions(self):
        permissions = Permission.objects.filter(codename__in=self.ALL_PERM_CODES,
                                                content_type__app_label=CustomPermissionContentType)
        self.populate_module_name(permissions)
        return permissions

    def populate_module_name(self, permissions):
        for p in permissions:
            p.module = self.CODES_TO_MODULE_NAME[p.codename]

    def get_perms_for_create(self):
        perms_from_db = Permission.objects.filter(codename__in=self.ALL_PERM_CODES,
                                                  content_type__app_label=CustomPermissionContentType)

        codename_to_perm_id = {p.codename: p.id for p in perms_from_db}

        module_to_perms = {}
        for perm in self.ALL_PERMS:
            if perm.module not in module_to_perms:
                module_to_perms[perm.module] = []
            perm.id = codename_to_perm_id[perm.codename]
            module_to_perms[perm.module].append(perm)
        return module_to_perms


permission_manager = PermissionManager()

#   THESE ARE TWO STANDALONE PERMISSIONS, AND ARE NOT PART OF THE ONES THAT THE USER CAN CONTROL
ACCESS_CLIENT_PORTAL = 'custom_permission.access_client_portal'
CRON_JOB_USER = 'custom_permission.is_cron_job_user'
