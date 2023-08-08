from django.urls import path
from .views import *


urlpatterns = [

    path('', RestaurantesListView.as_view()),
    path('<post_slug>', restaurantesDetailView.as_view()),
]