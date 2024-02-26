from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
path('users/', views.UserList.as_view()),
path('users/<int:pk>/', views.UserDetail.as_view()),
path('profiles', views.ProfileList.as_view()),
path('profiles/<int:pk>/',views.ProfileDetail.as_view()),
path('professionals/', views.ProfessionalList.as_view()),
path('professionals/<int:pk>/', views.ProfessionalDetail.as_view()),
path('resources', views.ResourceList.as_view()),
path('resources/<int:pk>/',views.ResourceDetail.as_view()),
path('posts/', views.PostList.as_view()),
path('posts/<int:pk>/', views.PostDetail.as_view()),
path('comments/', views.CommentList.as_view()),
path('comments/<int:pk>/',views.CommentDetail.as_view()),
path('appointments/', views.AppointmentList.as_view()),
path('appointments/<int:pk>/', views.AppointmentDetail.as_view()),
path('availability/', views.AvailabilityList.as_view()),
path('availability/<int:pk>/', views.AvailabilityDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
