# Generated by Django 4.2.10 on 2024-02-26 12:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("mentalapp", "0002_appointment_availability_comment_message_post_and_more"),
    ]

    operations = [
        migrations.RemoveField(model_name="profile", name="email",),
        migrations.RemoveField(model_name="profile", name="first_name",),
        migrations.RemoveField(model_name="profile", name="is_professional",),
        migrations.RemoveField(model_name="profile", name="last_name",),
    ]
