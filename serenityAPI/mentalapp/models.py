from django.db import models

# Create your models here.
class Profile(models.Model):
    """
    User Profile Class
    """
    user = models.ForeignKey('auth.User', related_name='profile', on_delete=models.CASCADE)
    profile_pic=models.ImageField(upload_to='profiles/',default='profiles/default.png')
    first_name=models.CharField(max_length=30)
    last_name=models.CharField(max_length=30)
    email=models.EmailField()
    is_professional = models.BooleanField()
    def __str__(self):
        return str(self.user)

class Professional(models.Model):
    """
    Mental health Professional Class
    """
    profile = models.ForeignKey('Profile', related_name='profile', on_delete=models.CASCADE)
    bio=models.TextField()
    specialization= models.ManyToManyField('Specialities', related_name='professional_specialization', on_delete=models.CASCADE)
    def __str__(self):
        return str(self.profile)
    
class Specialities(models.Model):
    """
    Mental health Specialities 
    """
    name= models.CharField(max_length = 100)
    description=models.TextField()
    def __str__(self):
        return str(self.name)
    
class Appointment(models.Model):
    """
    User Appointments with Professionals
    """
    user = models.ForeignKey('auth.User', related_name='user_profile', on_delete=models.CASCADE)
    professional = models.ForeignKey('Professional', related_name='professional_profile', on_delete=models.CASCADE)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    status = models.Choices('Approved')

    def __str__(self):
        return str(self.user)
    
class Post(models.Model):
    """
    Users Posts
    """
    user = models.ForeignKey('auth.User', related_name='user_profile', on_delete=models.CASCADE)
    title= models.CharField(max_length = 100)
    content=models.TextField()
    created_at = models.DateTimeField()

    def __str__(self):
        return self.title
    
class Comment(models.Model):
    """
    Users Comments
    """
    user = models.ForeignKey('auth.User', related_name='user_profile', on_delete=models.CASCADE)
    post = models.ForeignKey('Post', related_name='user_profile', on_delete=models.CASCADE)
    content=models.TextField()
    created_at = models.DateTimeField()
    def __str__(self):
        return self.content
    
class Message(models.Model):
    """
    Users Messages
    """
    sender = models.ForeignKey('auth.User', related_name='user_profile', on_delete=models.CASCADE)
    recipient = models.ForeignKey('auth.User', related_name='user_profile', on_delete=models.CASCADE)
    content=models.TextField()
    sent_at = models.DateTimeField()
    def __str__(self):
        return self.content
    
class Resource(models.Model):
    """
    Self-Help Resources
    """
    title= models.CharField(max_length = 100)
    description= models.TextField()
    url= models.URLField()
    created_at = models.DateTimeField()
    def __str__(self):
        return self.title