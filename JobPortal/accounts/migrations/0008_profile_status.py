# Generated by Django 3.2.8 on 2022-01-03 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_profile_jobtitle'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='status',
            field=models.CharField(max_length=132, null=True),
        ),
    ]