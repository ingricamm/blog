from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.
from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.


def restaurante_directory_path(instance, filename):
    return 'restaurante'.format(instance.title, filename)


# poder ver los blog en borrador o publicados
class Restaurantes(models.Model):

    class AboutObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    # contenido del about
    restaurantes_id =      models.PositiveIntegerField( default=1, validators=[MinValueValidator(1), MaxValueValidator(10)], unique=True)
    title =         models.CharField(max_length=255)
    imagen =        models.ImageField(upload_to=restaurante_directory_path, blank=True, null=True)
    video =         models.FileField(upload_to=restaurante_directory_path, blank=True, null=True)
    content =       RichTextField(default=None)
    # status de nuestro About

    status = models.CharField(max_length=10, choices=options, default='draft')
    objects = models.Manager()  # default manager
    aboutobjects = AboutObjects()  # custom manager

    class Meta:
            ordering = ('id',)

    def __str__(self):
        return self.title

    def get_video(self):
        if self.video:
            return self.video.url
        return ''

    def get_imagen(self):
        if self.imagen:
            return self.imagen.url
        return ''
