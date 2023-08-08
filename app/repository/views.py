from django.shortcuts import render, get_object_or_404

# Create your views here.
from app.category.models import Category
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Repository
from .serializers import RepositorySerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

from django.db.models.query_utils import Q


class RepositoryListView(APIView):
    def get(self, request, format=None):
        if Repository.repositoryobjects.all().exists():

            posts = Repository.repositoryobjects.all()
            
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = RepositorySerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class RepositoryListCategoryView(APIView):
    def get(self, request, category_id, format=None):
        if Repository.repositoryobjects.all().exists():
            
            category = Category.objects.get(id=category_id)
            posts =Repository.repositoryobjects.all().filter(category=category)

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = RepositorySerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class PostDetailView(APIView):
    def get(self, request, post_slug,format=None):
        repository = get_object_or_404(Repository, slug=post_slug)
        serializer = RepositorySerializer(repository)
        return Response({'post':serializer.data}, status=status.HTTP_200_OK)

