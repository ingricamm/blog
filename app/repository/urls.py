from django.urls import path
from .views import *


urlpatterns = [
    path('', RepositoryListView.as_view()),
    path('category/<category_id>', RepositoryListView.as_view()),
    path('<post_slug>', RepositoryListView.as_view()),
    path("search/<str:search_term>", RepositoryListView.as_view()),
]
