from django.urls import path, include
from . import views

urlpatterns = [
    path('projects/', views.project_list, name='project_list'),
    path('events/', views.event_list, name='event_list'),
    path('contact/', views.contact_form, name='messages' )
]
