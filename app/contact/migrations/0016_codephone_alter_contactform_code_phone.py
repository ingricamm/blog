# Generated by Django 4.1.5 on 2023-03-17 03:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0015_alter_contactform_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='CodePhone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.AlterField(
            model_name='contactform',
            name='code_phone',
            field=models.CharField(max_length=50),
        ),
    ]
