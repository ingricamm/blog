# Generated by Django 4.1.5 on 2023-01-29 21:51

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='description',
        ),
        migrations.AddField(
            model_name='post',
            name='content',
            field=ckeditor.fields.RichTextField(default=None),
        ),
    ]
