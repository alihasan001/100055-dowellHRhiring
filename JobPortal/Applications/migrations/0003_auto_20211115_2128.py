# Generated by Django 3.2.8 on 2021-11-15 21:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Applications', '0002_newjobapplication'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='jobapplication',
            name='userProfile',
        ),
        migrations.AddField(
            model_name='jobapplication',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='jobapplication',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.CreateModel(
            name='CanidateStatus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hr_Status', models.CharField(max_length=132)),
                ('hr_FeedBack', models.CharField(max_length=300)),
                ('team_lead_status', models.CharField(max_length=132)),
                ('team_lead_feedback', models.CharField(max_length=300)),
                ('accounts', models.CharField(max_length=132)),
                ('JobApplication', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Applications.jobapplication')),
            ],
        ),
    ]