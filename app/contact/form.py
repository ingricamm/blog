
from .models import Contact
from django import forms


def contact_directory_path():
    return 'contact/'

""" 
def contact_directory_path(instance, filename):
    return 'contact/{0}/{1}'.format(instance.name, filename) """



class ContactForms(forms.ModelForm):
   
    class Meta:
        model = Contact
        fields = '__all__'
        
        
        
