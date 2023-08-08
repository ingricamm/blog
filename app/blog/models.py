from django.db import models
import uuid
from app.category.models import Category
from django.utils import timezone
from ckeditor.fields import RichTextField

# Create your models here.
def blog_directory_path(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)


#poder ver los blog en borrador o publicados
class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )
    
    #contenido del blog
    blog_uuid =         models.UUIDField(default=uuid.uuid4, unique=True)
    title =             models.CharField(max_length=255)
    slug =              models.SlugField(unique=True)
    thumbnail =         models.ImageField(upload_to="media")
    video =             models.FileField(upload_to=blog_directory_path, blank=True, null=True)
    description =       RichTextField(verbose_name="contenido", blank=True)
    excerpt =           models.CharField(max_length=100)
    
    
    # author =            models.CharField(max_length=255)
    category =          models.ForeignKey(Category, on_delete=models.PROTECT)
    
    #hora de publicación
    published =         models.DateTimeField(default=timezone.now)
   
    #status de nuestro blog

    status =            models.CharField(max_length=10, choices=options, default='draft')

    objects =           models.Manager()  # default manager
    postobjects =       PostObjects()  # custom manager

    class Meta:
            ordering = ('-published',)

    def __str__(self):
            return self.title

    def get_video(self):
            if self.video:
                return self.video.url
            return ''

    def get_thumbnail(self):
            if self.thumbnail:
                return self.thumbnail.url
            return ''
        