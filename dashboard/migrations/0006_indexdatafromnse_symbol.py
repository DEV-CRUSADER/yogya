# Generated by Django 5.0 on 2024-01-13 09:25

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0005_indexlists_delete_inndexlists'),
    ]

    operations = [
        migrations.AddField(
            model_name='indexdatafromnse',
            name='symbol',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.DO_NOTHING, related_name='index_data', to='dashboard.indexlists'),
        ),
    ]