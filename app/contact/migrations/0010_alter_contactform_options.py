# Generated by Django 4.1.5 on 2023-03-08 02:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0009_alter_contactform_options_alter_contactform_managers'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contactform',
            options={'ordering': ('-sended',)},
        ),
    ]
