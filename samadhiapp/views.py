from django.shortcuts import render
from .models import User
from django.views.generic import ListView
from samadhiapp.serializers import UserListSerializer
from rest_framework import viewsets

class UserListViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserListSerializer
    

# Create your views here.
class AboutView(ListView):
    queryset = User.objects.all()
    context_object_name = 'users'
    template_name = "index.html"
