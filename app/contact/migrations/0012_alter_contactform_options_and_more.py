# Generated by Django 4.1.5 on 2023-03-12 18:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0011_alter_contactform_file'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contactform',
            options={},
        ),
        migrations.RemoveField(
            model_name='contactform',
            name='contact_id',
        ),
        migrations.RemoveField(
            model_name='contactform',
            name='sended',
        ),
    ]