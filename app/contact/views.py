from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from .form import *
from rest_framework import status
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import HttpResponse
from django.core.mail import send_mail, BadHeaderError

# Imaginary function to handle an uploaded file.

# Create your views here.


class contactviews(APIView):

    def get(self, request,  *args, **kwargs):
        form = Contact.objects.all()
        serializer = ContactSerializer(form, many=True)
        return Response({'contact': serializer.data}, status=status.HTTP_200_OK)

    @method_decorator(csrf_exempt)
    def post(self, request, format=None):
        form = ContactSerializer( data=request.data) 
  
        if form.is_valid():
            form.save()
            print("************datos*************")
            print(form.data)
            print("******************************")

            subject = "Website Inquiry"
            body = [form.data]
            message = "\n".join(map(str, body))
            try:
                send_mail(subject, message, 'admin@example.com',
                          ['admin@example.com'])
                print(form.data)

            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return Response(form.data, status=status.HTTP_201_CREATED)

        print(form.errors)
        print("******************************")
        print(form.data)
        form = ContactSerializer()
        return render(request, {'contact': form.data}, status=status.HTTP_200_OK)
        # return Response(form.data, status=status.HTTP_201_CREATED)
