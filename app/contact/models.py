
from django.db import models
from django.utils import timezone

# Create your models here.


def contact_directory_path(instance, filename):
    return 'contact/{0}/{1}'.format(instance.name, filename)

# Create your models here.


class Contact(models.Model):

    name = models.CharField(max_length=50 )
    email_address = models.CharField(max_length=50)
    code_phone = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    message = models.TextField(verbose_name="contenido")
 

    def __str__(self):
        if self.name:
            return self.name
        return ''

