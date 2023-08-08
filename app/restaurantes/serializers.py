from rest_framework import serializers
from .models import Restaurantes



class RestaurantesSerializer(serializers.ModelSerializer):
    imagen=serializers.CharField(source='get_imagen')
    video=serializers.CharField(source='get_video')
 
    class Meta:
        model=Restaurantes
        fields=[
            'id',
            'title',
            'imagen',
            'video',
            'content',
            'status',
        ]