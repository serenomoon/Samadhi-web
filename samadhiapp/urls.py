from django.urls import path, re_path, include
from samadhiapp import views
from rest_framework import routers


app_name = 'samadhiapp'

router = routers.DefaultRouter()
router.register(r'users', views.UserListViewSet)

urlpatterns = [
    path('', views.AboutView.as_view()),
    path('', include(router.urls)),
    re_path(r'^(?:.*)/?$', views.AboutView.as_view()),
]