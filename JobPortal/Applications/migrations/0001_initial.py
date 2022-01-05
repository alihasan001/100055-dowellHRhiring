# Generated by Django 3.2.8 on 2021-11-13 09:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0005_delete_jobapplication'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobApplication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('feedBack', models.TextField(null=True)),
                ('freelancePlatformUrl', models.URLField(null=True)),
                ('applicationName', models.CharField(max_length=132)),
                ('status', models.CharField(max_length=132, null=True)),
                ('country', models.CharField(max_length=132, null=True)),
                ('username', models.CharField(max_length=132, null=True)),
                ('qualification', models.CharField(max_length=132, null=True)),
                ('freelancePlatform', models.CharField(max_length=132, null=True)),
                ('others', models.JSONField()),
                ('userProfile', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.profile')),
            ],
        ),
    ]