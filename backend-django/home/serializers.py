from rest_framework import serializers
from .models import Event, ContactMessage, Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Event
        fields = ['name', 'date', 'description', 'location', 'review']


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'
        readonly_fields = ['created_at']