# Generated by Django 3.2.10 on 2022-01-04 13:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_profile_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='image',
        ),
    ]
