# Generated by Django 3.1.5 on 2021-02-02 09:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('road', '0003_auto_20210202_0949'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='roads',
            name='IDO_name',
        ),
        migrations.RemoveField(
            model_name='roads',
            name='district_1',
        ),
        migrations.RemoveField(
            model_name='roads',
            name='district_code',
        ),
        migrations.RemoveField(
            model_name='roads',
            name='district_name',
        ),
        migrations.RemoveField(
            model_name='roads',
            name='length_km',
        ),
        migrations.RemoveField(
            model_name='roads',
            name='name',
        ),
        migrations.RemoveField(
            model_name='roads',
            name='prov_code',
        ),
        migrations.RemoveField(
            model_name='roads',
            name='prov_name_1',
        ),
        migrations.RemoveField(
            model_name='roads',
            name='prov_name_2',
        ),
    ]
