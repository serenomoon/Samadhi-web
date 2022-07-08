from django.urls import path, re_path, include
from samadhiapp import views
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static


app_name = 'samadhiapp'

router = routers.DefaultRouter()
router.register(r'usersdata', views.UserListViewSet, basename='usersdata')
router.register(r'clasesdata', views.ClasesListViewSet, basename='clasesdata')
router.register(r'noticiasdata', views.NoticiasListViewSet, basename='noticiasdata')
router.register(r'facilitadoresdata', views.FacilitadoresListViewSet, basename='facilitadoresdata')
router.register(r'alumnosdata', views.AlumnosListViewSet, basename='alumnosdata')


urlpatterns = [
    path('', views.UserView.as_view()),
    path('', views.ClasesView.as_view()),
    # path('', views.NoticiasView.as_view()),
    path('', views.FacilitadoresView.as_view()),
    path('', views.AlumnosView.as_view()),
    path('api/', include(router.urls)),
    re_path(r'^(?:.*)/?$', views.ClasesView.as_view()),
    re_path(r'^(?:.*)/?$', views.UserView.as_view()),
    re_path('', views.NoticiasView.as_view()),
    re_path(r'^(?:.*)/?$', views.FacilitadoresView.as_view()),
    re_path(r'^(?:.*)/?$', views.AlumnosView.as_view()),

] 
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

