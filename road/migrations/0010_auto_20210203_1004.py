# Generated by Django 3.1.5 on 2021-02-03 10:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('road', '0009_auto_20210203_0931'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='roads',
            name='road_code',
        ),
        migrations.RemoveField(
            model_name='roads',
            name='section_code',
        ),
    ]