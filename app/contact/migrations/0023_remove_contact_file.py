# Generated by Django 4.1.5 on 2023-08-07 21:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0022_alter_contact_managers'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contact',
            name='file',
        ),
    ]
