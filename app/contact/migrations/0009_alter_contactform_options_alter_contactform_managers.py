# Generated by Django 4.1.5 on 2023-03-08 02:36

from django.db import migrations
import django.db.models.manager


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0008_alter_contactform_file'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contactform',
            options={'ordering': ('-contact_id',)},
        ),
        migrations.AlterModelManagers(
            name='contactform',
            managers=[
                ('contactObject', django.db.models.manager.Manager()),
            ],
        ),
    ]
