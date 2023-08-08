from rest_framework import serializers
from .models import Contact


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
        extra_kwargs = {'name': {'required': False},
                        'email_address': {'required': False},
                        'code_phone': {'required': False},
                        'phone': {'required': False},
                        'message': {'required': False},
                       }
    
    def validate(self, data):
        return data

