from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.parsers import MultiPartParser, FormParser

from .models import Alumnos, Facilitadores, Noticias, User, Clases
from django.views.generic import ListView
from samadhiapp.serializers import UserListSerializer, ClasesListSerializer, AlumnosListSerializer, FacilitadoresListSerializer, NoticiasListSerializer
from rest_framework import viewsets

class UserListViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserListSerializer

class ClasesListViewSet(viewsets.ModelViewSet):
    queryset = Clases.objects.all()
    serializer_class = ClasesListSerializer
    parser_classes = (MultiPartParser, FormParser)

# class NoticiasListViewSet(viewsets.ModelViewSet):
#     queryset = Noticias.objects.all()
#     serializer_class = NoticiasListSerializer
#     parser_classes = (MultiPartParser, FormParser)
class NoticiasListViewSet(viewsets.ModelViewSet):
    queryset = Noticias.objects.all()
    serializer_class = NoticiasListSerializer
    
    def post(self,request,*args,**kwargs):
        uploadimg =request.data['uploadimg']
        title = request.data['title']
        Noticias.objects.create(title=title, uploadimg=uploadimg)
        return HttpResponse({'message': 'Noticia creada'}, status=200)

class FacilitadoresListViewSet(viewsets.ModelViewSet):
    queryset = Facilitadores.objects.all()
    serializer_class = FacilitadoresListSerializer
    parser_classes = (MultiPartParser, FormParser)

class AlumnosListViewSet(viewsets.ModelViewSet):
    queryset = Alumnos.objects.all()
    serializer_class = AlumnosListSerializer
    parser_classes = (MultiPartParser, FormParser)
    

# Create your views here.
class UserView(ListView):
    queryset = User.objects.all()
    context_object_name = 'usersdata'
    template_name = "index.html"

class ClasesView(ListView):
    queryset = Clases.objects.all()
    context_object_name = 'clasesdata'
    template_name = "index.html"

class NoticiasView(ListView):
    queryset = Noticias.objects.all()
    context_object_name = 'noticiasdata'
    template_name = "index.html"

class FacilitadoresView(ListView):
    queryset = Facilitadores.objects.all()
    context_object_name = 'facilitadoresdata'
    template_name = "index.html"

class AlumnosView(ListView):
    queryset = Alumnos.objects.all()
    context_object_name = 'alumnosdata'
    template_name = "index.html"
