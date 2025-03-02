from django.db import models

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField()
    technologies = models.CharField(max_length=300)
    github_link = models.URLField(null=True, blank=True)
    live_demo = models.URLField(null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    

class Event(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField()
    date = models.DateField()
    location = models.CharField(max_length=300)
    attended = models.BooleanField(default=False)
    review = models.TextField()

    def __str__(self):
        return self.name
    

class ContactMessage(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name} - {self.created_at}'
    
