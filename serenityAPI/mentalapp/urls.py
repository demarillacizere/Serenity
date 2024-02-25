from django.urls import path
from . import views

urlpatterns = [
path('', views.get_data),
path('post/',views.post_data),
]
