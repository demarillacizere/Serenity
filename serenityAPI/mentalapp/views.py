from rest_framework import generics
from django.contrib.auth.models import User
from .models import Profile, Professional, Speciality, Appointment, Post, Comment, Message, Resource, Availability
from .serializers import UserSerializer, ProfileSerializer, ProfessionalSerializer, SpecialitySerializer, AppointmentSerializer, PostSerializer, CommentSerializer, MessageSerializer, ResourceSerializer, AvailabilitySerializer

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
class ProfileList(generics.ListCreateAPIView):
    """
    API endpoint that allows profiles to be viewed or created.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows a profile to be retrieved, updated, or deleted.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProfessionalList(generics.ListCreateAPIView):
    """
    API endpoint that allows professionals to be viewed or created.
    """
    queryset = Professional.objects.all()
    serializer_class = ProfessionalSerializer

class ProfessionalDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows a professional to be retrieved, updated, or deleted.
    """
    queryset = Professional.objects.all()
    serializer_class = ProfessionalSerializer

class SpecialityList(generics.ListCreateAPIView):
    """
    API endpoint that allows specialities to be viewed or created.
    """
    queryset = Speciality.objects.all()
    serializer_class = SpecialitySerializer

class SpecialityDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows a speciality to be retrieved, updated, or deleted.
    """
    queryset = Speciality.objects.all()
    serializer_class = SpecialitySerializer

class AppointmentList(generics.ListCreateAPIView):
    """
    API endpoint that allows appointments to be viewed or created.
    """
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class AppointmentDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows an appointment to be retrieved, updated, or deleted.
    """
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class PostList(generics.ListCreateAPIView):
    """
    API endpoint that allows posts to be viewed or created.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows a post to be retrieved, updated, or deleted.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentList(generics.ListCreateAPIView):
    """
    API endpoint that allows comments to be viewed or created.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows a comment to be retrieved, updated, or deleted.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class MessageList(generics.ListCreateAPIView):
    """
    API endpoint that allows messages to be viewed or created.
    """
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

class MessageDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows a message to be retrieved, updated, or deleted.
    """
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

class ResourceList(generics.ListCreateAPIView):
    """
    API endpoint that allows resources to be viewed or created.
    """
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer

class ResourceDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows a resource to be retrieved, updated, or deleted.
    """
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer

class AvailabilityList(generics.ListCreateAPIView):
    """
    API endpoint that allows availabilities to be viewed or created.
    """
    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer

class AvailabilityDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API endpoint that allows an availability to be retrieved, updated, or deleted.
    """
    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer
