# Generated by Django 4.2.9 on 2024-01-27 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0003_alter_businessmembers_is_staff'),
    ]

    operations = [
        migrations.AlterField(
            model_name='businessmembers',
            name='is_staff',
            field=models.BooleanField(default=False),
        ),
    ]