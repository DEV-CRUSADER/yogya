from dashboard.models import Roles
from dashboard.pub_sub.event_producer import EntityName, EventType, SystemEvent
from dashboard.services.roles_and_permissions.permissions import permission_manager


class RoleService:
    @staticmethod
    def delete(editing_bm, role_id):
        SystemEvent(event_type=EventType.DELETE, entity_name=EntityName.ROLE, entity_id=role_id,
                    business_member_id=editing_bm.id, metadata={}).create()
        Roles.objects.filter(pk=role_id).delete()

    @staticmethod
    def create(editing_bm, name, description='', permissions=None, team_members=None):
        role = Roles.objects.create(name=name, description=description)
        if permissions:
            role.permissions.set(permissions)
        if team_members:
            role.team_members.set(team_members)
        role.save()

        SystemEvent(event_type=EventType.CREATE, entity_name=EntityName.ROLE, entity_id=str(role.id),
                    business_member_id=str(editing_bm.id), metadata={}).create()

        return role

    @staticmethod
    def get(role_id):
        return Roles.objects.get(pk=role_id)

    @staticmethod
    def get_name_by_ids(role_ids):
        return [resp['name'] for resp in Roles.objects.filter(pk__in=role_ids).values('name')]


    @staticmethod
    def generate_edit_event(business_member_id, role, serializer_data):
        changed_fields = {}
        if role.name != serializer_data.get('name'):
            changed_fields['name'] = serializer_data.get('name')

        if role.description != serializer_data.get('description'):
            changed_fields['description'] = serializer_data.get('description')

        if [perm['id'] for perm in list(role.permissions.values('id'))] != serializer_data.get('permissions'):
            changed_fields['permissions'] = permission_manager.get_name_by_ids(serializer_data.get('permissions'))

        SystemEvent(event_type=EventType.UPDATE, entity_name=EntityName.ROLE, entity_id=role.id,
                    business_member_id=business_member_id, metadata=changed_fields).create()

    @staticmethod
    def update(editing_bm, role_id, data):
        role = RoleService.get(role_id=role_id)

        RoleService.generate_edit_event(business_member_id=editing_bm.id, role=role,
                                        serializer_data=data)

        role.name = data.get('name', role.name)
        role.description = data.get('description', role.description)
        permissions = data.get('permissions', None)
        if permissions is not None:
            role.permissions.set(permissions)

        team_members = data.get('team_members', None)
        if team_members is not None:
            role.team_members.set(team_members)
        role.save()
        return role

    @staticmethod
    def generate_default_roles(creating_bm):
        all_permissions = permission_manager.get_all_system_permissions()
        permission_code_to_permission_id = {p.codename: p.id for p in all_permissions}

        for role_name, permissions in DEFAULT_ROLES.items():
            permission_ids = [permission_code_to_permission_id[p.codename] for p in permissions]
            RoleService.create(name=role_name, permissions=permission_ids, editing_bm=creating_bm)


DEFAULT_ROLES = {
    "Admin" : [
        permission_manager.CLIENTS_CREATE,
        permission_manager.CLIENTS_EDIT,
        permission_manager.CLIENTS_DELETE,
        permission_manager.CLIENTS_VIEW,
        permission_manager.ROLES_CREATE,
        permission_manager.ROLES_EDIT,
        permission_manager.ROLES_DELETE,
        permission_manager.ROLES_VIEW,
        permission_manager.BLOGS_CREATE,
        permission_manager.BLOGS_EDIT,
        permission_manager.BLOGS_DELETE,
        permission_manager.BLOGS_VIEW
    ],
    "Client" : [
        permission_manager.BLOGS_CREATE,
        permission_manager.BLOGS_EDIT,
        permission_manager.BLOGS_DELETE,
        permission_manager.BLOGS_VIEW
    ]
}