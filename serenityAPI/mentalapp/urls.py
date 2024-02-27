# from django.urls import path
# from rest_framework.urlpatterns import format_suffix_patterns
# from . import views

# urlpatterns = format_suffix_patterns([
# path('', views.api_root),
# path('users/', views.UserList.as_view(),name='user-list' ),
# path('users/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),
# path('profiles/', views.ProfileList.as_view(), name='profile-list'),
# path('profiles/<int:pk>/',views.ProfileDetail.as_view()),
# path('professionals/', views.ProfessionalList.as_view()),
# path('professionals/<int:pk>/', views.ProfessionalDetail.as_view()),
# path('resources/', views.ResourceList.as_view()),
# path('resources/<int:pk>/',views.ResourceDetail.as_view()),
# path('posts/', views.PostList.as_view()),
# path('posts/<int:pk>/', views.PostDetail.as_view()),
# path('comments/', views.CommentList.as_view()),
# path('comments/<int:pk>/',views.CommentDetail.as_view()),
# path('appointments/', views.AppointmentList.as_view()),
# path('appointments/<int:pk>/', views.AppointmentDetail.as_view()),
# path('availability/', views.AvailabilityList.as_view()),
# path('availability/<int:pk>/', views.AvailabilityDetail.as_view()),
# ])

from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

# Create a router and register our ViewSets with it.
router = DefaultRouter()
router.register(r'users', views.UserViewSet, basename='user')
router.register(r'profiles', views.ProfileViewSet, basename='profile')
router.register(r'posts', views.PostViewSet, basename='post')
router.register(r'specialities', views.SpecialityViewSet, basename='speciality')
router.register(r'appointments', views.AppointmentViewSet, basename='appointment')
router.register(r'posts', views.PostViewSet, basename='post')
router.register(r'comments', views.CommentViewSet, basename='comment')
router.register(r'messages', views.MessageViewSet, basename='message')
router.register(r'resources', views.ResourceViewSet, basename='resource')
router.register(r'availabilities', views.AvailabilityViewSet, basename='availability')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
]