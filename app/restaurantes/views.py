
# Create your views here.
from django.shortcuts import render, get_object_or_404

# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination
from .models import Restaurantes
from .serializers import RestaurantesSerializer

class RestaurantesListView(APIView):
    def get(self, request, format=None):
        if Restaurantes.aboutobjects.all().exists():

            restaurantes = Restaurantes.aboutobjects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(restaurantes, request)
            serializer = RestaurantesSerializer(results, many=True)

            return paginator.get_paginated_response({'restaurantes': serializer.data})
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class restaurantesDetailView(APIView):
    def get(self, request, format=None):

        if Restaurantes.Aboutobjects.all().exists():

            restaurantes = Restaurantes.aboutobjects.all()
           
            serializer = RestaurantesSerializer(restaurantes, many=True)

            return Response({'restaurantes': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
