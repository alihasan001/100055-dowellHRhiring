# Generated by Django 3.2.8 on 2021-11-15 23:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Applications', '0007_rename_accounts_accountscanidatestatus_accounts_feedback'),
    ]

    operations = [
        migrations.AlterField(
            model_name='accountscanidatestatus',
            name='JobApplication',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Applications.jobapplication'),
        ),
        migrations.AlterField(
            model_name='tmcanidatestatus',
            name='JobApplication',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Applications.jobapplication'),
        ),
    ]