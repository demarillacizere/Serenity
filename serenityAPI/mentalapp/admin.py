from django.contrib import admin
from .models import Profile, Professional, Post, Availability, Message, Resource, Speciality, Appointment, Comment

# Register your models here.
admin.site.register(Profile)
admin.site.register(Professional)
admin.site.register(Availability)
admin.site.register(Speciality)
admin.site.register(Appointment)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Message)
admin.site.register(Resource)
