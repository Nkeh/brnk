from django.shortcuts import render, redirect, get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import ContactMessageSerializer, EventSerializer, ProjectSerializer
from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status

# Create your views here.

@api_view(['GET'])
def project_list(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def event_list(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def contact_form(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():

        contact_message = serializer.save()
        name = contact_message.name
        email = contact_message.email
        message = contact_message.message
        subject = f'New Contact Form Submission from {name}'
        
        email_body = f"""You have received a new contact Form Submission from the BRNK site contact form.

        Name: {name}
        Email: {email}
        Message: {message}

        """
        try:
            send_mail(
                subject,
                email_body,
                settings.DEFAULT_FROM_EMAIL,
                ['bonyankeh@gmail.com'],
                fail_silently=False


            )
            return Response({"success": "Email Successfully sent!"}, status=201)
        except Exception as e:
            return Response({"error": f'Email failed to send: {str(e)}'}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)

        #return Response({'message': 'Thank you for reaching out, will get to you later'}, status=201)
    return Response(serializer.errors, status=400)
    