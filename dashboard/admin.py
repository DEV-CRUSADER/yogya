from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from dashboard.models import User, BusinessMembers, Clients, Roles

# Register your models here.
admin.site.register(User)
admin.site.register(BusinessMembers)
admin.site.register(Clients)
admin.site.register(Roles)

admin.site.site_header = "My Dashboard"
admin.site.site_title = "My Dashboard Admin Portal"
admin.site.index_title = "YC Admin"

# Customizing the Admin Interface
class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ('email', 'is_staff', 'is_active',)
    list_filter = ('email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
         ),
    )
    search_fields = ('email',)
    ordering = ('email',)