# Generated by Django 3.2.9 on 2021-11-05 21:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20211105_2104'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobapplication',
            name='others',
            field=models.JSONField(),
        ),
    ]