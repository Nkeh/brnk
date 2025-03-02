from django.contrib import admin
from .models import Project, ContactMessage, Event
# Register your models here.

admin.site.register(Project)


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    pass

admin.site.register(ContactMessage)