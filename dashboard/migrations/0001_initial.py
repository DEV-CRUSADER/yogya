# Generated by Django 4.2.9 on 2024-01-27 09:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('deleted_at', models.DateTimeField(blank=True, db_index=True, default=None, editable=False, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('is_verified', models.BooleanField(default=False, verbose_name='is_verified')),
                ('phone_number', models.CharField(blank=True, max_length=20, null=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'unique_together': {('email',)},
            },
        ),
        migrations.CreateModel(
            name='BusinessMembers',
            fields=[
                ('deleted_at', models.DateTimeField(blank=True, db_index=True, default=None, editable=False, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('is_verified', models.BooleanField(default=False)),
                ('is_client', models.BooleanField(default=False)),
                ('is_owner', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
                ('all_clients_access', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='ContactUS',
            fields=[
                ('deleted_at', models.DateTimeField(blank=True, db_index=True, default=None, editable=False, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('phone_number', models.CharField()),
                ('message', models.CharField(blank=True, max_length=100000, null=True)),
                ('is_read', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='IndexLists',
            fields=[
                ('deleted_at', models.DateTimeField(blank=True, db_index=True, default=None, editable=False, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200, unique=True)),
                ('symbol', models.CharField(max_length=200, unique=True)),
                ('type', models.CharField(max_length=200)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Roles',
            fields=[
                ('deleted_at', models.DateTimeField(blank=True, db_index=True, default=None, editable=False, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField()),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
                ('permissions', models.ManyToManyField(related_name='roles', to='auth.permission')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='IndexDataFromNSE',
            fields=[
                ('deleted_at', models.DateTimeField(blank=True, db_index=True, default=None, editable=False, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('index_name', models.CharField(max_length=200)),
                ('date', models.DateField()),
                ('pb', models.FloatField()),
                ('pe', models.FloatField()),
                ('divYield', models.FloatField()),
                ('symbol', models.ForeignKey(default=None, on_delete=django.db.models.deletion.DO_NOTHING, related_name='index_data', to='dashboard.indexlists')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Clients',
            fields=[
                ('deleted_at', models.DateTimeField(blank=True, db_index=True, default=None, editable=False, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('first_name', models.CharField(blank=True, max_length=100, null=True)),
                ('last_name', models.CharField(blank=True, max_length=100, null=True)),
                ('display_name', models.CharField(blank=True, max_length=100, null=True)),
                ('client_portal_enabled', models.BooleanField(default=False)),
                ('birthdate', models.DateField(blank=True, null=True)),
                ('email', models.EmailField(max_length=254)),
                ('phone_number', models.BigIntegerField(blank=True, null=True)),
                ('business_member', models.OneToOneField(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='client', to='dashboard.businessmembers')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='businessmembers',
            name='clients_accessible',
            field=models.ManyToManyField(related_name='staffs', to='dashboard.clients'),
        ),
        migrations.AddField(
            model_name='businessmembers',
            name='group',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='auth.group'),
        ),
        migrations.AddField(
            model_name='businessmembers',
            name='permissions',
            field=models.ManyToManyField(related_name='member_permissions', to='auth.permission'),
        ),
        migrations.AddField(
            model_name='businessmembers',
            name='roles',
            field=models.ManyToManyField(related_name='member_roles', to='dashboard.roles'),
        ),
        migrations.AddField(
            model_name='businessmembers',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='AuditLogs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_type', models.CharField()),
                ('entity_name', models.CharField()),
                ('entity_id', models.UUIDField()),
                ('metadata', models.JSONField(default=dict)),
                ('event_time', models.DateTimeField(auto_now_add=True)),
                ('business_member', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_query_name='audit_logs', to='dashboard.businessmembers')),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='businessmembers',
            unique_together={('user',)},
        ),
    ]
