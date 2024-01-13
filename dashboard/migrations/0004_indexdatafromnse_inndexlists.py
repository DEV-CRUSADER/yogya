# Generated by Django 5.0 on 2024-01-09 20:50

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0003_contactus_is_read'),
    ]

    operations = [
        migrations.CreateModel(
            name='IndexDataFromNSE',
            fields=[
                ('deleted_at', models.DateTimeField(blank=True, db_index=True, default=None, editable=False, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('index_name', models.CharField(max_length=200)),
                ('date', models.CharField()),
                ('pb', models.FloatField()),
                ('pe', models.FloatField()),
                ('divYield', models.FloatField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='InndexLists',
            fields=[
                ('deleted_at', models.DateTimeField(blank=True, db_index=True, default=None, editable=False, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('symbol', models.CharField(max_length=200)),
                ('type', models.CharField(max_length=200)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]