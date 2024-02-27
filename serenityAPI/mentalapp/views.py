from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import permissions
from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Profile, Professional, Speciality, Appointment, Post, Comment, Message, Resource, Availability
from .serializers import UserSerializer, ProfileSerializer, ProfessionalSerializer, SpecialitySerializer, AppointmentSerializer, PostSerializer, CommentSerializer, MessageSerializer, ResourceSerializer, AvailabilitySerializer


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'profiles': reverse('profile-list', request=request, format=format)
    })


class UserViewSet(viewsets.ModelViewSet):
    """
    This ViewSet automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ProfileViewSet(viewsets.ModelViewSet):
    """
    Profile ViewSet
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ProfessionalViewSet(viewsets.ModelViewSet):
    """
    Professional ViewSet
    """
    queryset = Professional.objects.all()
    serializer_class = ProfessionalSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class SpecialityViewSet(viewsets.ModelViewSet):
    """
    Speciality ViewSet
    """
    queryset = Speciality.objects.all()
    serializer_class = SpecialitySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class AppointmentViewSet(viewsets.ModelViewSet):
    """
    Appointment ViewSet
    """
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class PostViewSet(viewsets.ModelViewSet):
    """
    Profile ViewSet
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class CommentViewSet(viewsets.ModelViewSet):
    """
    Comment ViewSet
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class MessageViewSet(viewsets.ModelViewSet):
    """
    Message ViewSet
    """
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)


class ResourceViewSet(viewsets.ModelViewSet):
    """
    Resource ViewSet
    """
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class AvailabilityViewSet(viewsets.ModelViewSet):
    """
    Availability ViewSet
    """
    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
