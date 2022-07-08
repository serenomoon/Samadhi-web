from django.contrib import admin

from .models import Alumnos, Clases, Facilitadores, Noticias, User

# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ( 'name', 'email', 'password')
    list_filter = ('name',)
    search_fields = ( 'name', 'email')

@admin.register(Clases)
class ClasesAdmin(admin.ModelAdmin):
    list_display = ( 'title','mensaje','date','time','uploadimg')
    list_filter = ('title',)
    search_fields = ( 'title','mensaje','date','time')

@admin.register(Noticias)
class NoticiasAdmin(admin.ModelAdmin):
    list_display = ( 'title','mensaje','date','time','uploadimg')
    list_filter = ('title',)
    search_fields = ( 'title','mensaje','date','time')

@admin.register(Facilitadores)
class FacilitadoresAdmin(admin.ModelAdmin):
    list_display = ('name','lastname','address','telephone','email','activity','bio','service','date','time','uploadimgname')
    list_filter = ('name',)
    search_fields = ( 'name','lastname','address','telephone','email','activity')

@admin.register(Alumnos)
class AlumnosAdmin(admin.ModelAdmin):
    list_display = ('name','lastname','email','address','telephone','date','time')
    list_filter = ('name',)
    search_fields = ( 'name','lastname','email','address','telephone','clase')
