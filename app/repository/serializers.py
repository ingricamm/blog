from rest_framework import serializers
from .models import Repository
from app.category.serializers import CategorySerializer


class RepositorySerializer(serializers.ModelSerializer):
    thumbnail=serializers.CharField(source='get_thumbnail')
    category=CategorySerializer()
    class Meta:
        model=Repository
        fields=[
            'repository_uuid',
            'title',
            'slug',
            'thumbnail',
            'url',
            'description',
            'category',
            'published',
            'status',
        ]
    