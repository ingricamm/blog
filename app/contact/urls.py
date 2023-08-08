from django.urls import path

from .views import  *


urlpatterns = [
      
       path('', contactviews.as_view(), name='contact'), 
   
  
]

