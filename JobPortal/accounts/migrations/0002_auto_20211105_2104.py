# Generated by Django 3.2.9 on 2021-11-05 21:04

from django.db import migrations, models
import django.db.models.deletion
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
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
                ('others', jsonfield.fields.JSONField()),
                ('userProfile', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.profile')),
            ],
        ),
        migrations.RemoveField(
            model_name='pythondeveloper',
            name='userProfile',
        ),
        migrations.RemoveField(
            model_name='socialmediafreelancer',
            name='userProfile',
        ),
        migrations.RemoveField(
            model_name='statistics',
            name='userProfile',
        ),
        migrations.RemoveField(
            model_name='uidesign',
            name='userProfile',
        ),
        migrations.RemoveField(
            model_name='virtualasistant',
            name='userProfile',
        ),
        migrations.DeleteModel(
            name='BusinessDevelopment',
        ),
        migrations.DeleteModel(
            name='PythonDeveloper',
        ),
        migrations.DeleteModel(
            name='SocialMediaFreeLancer',
        ),
        migrations.DeleteModel(
            name='Statistics',
        ),
        migrations.DeleteModel(
            name='UIDesign',
        ),
        migrations.DeleteModel(
            name='VirtualAsistant',
        ),
    ]
