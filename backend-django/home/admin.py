from django.contrib import admin
from .models import Project, ContactMessage, Event
# Register your models here.

admin.site.register(Project)
admin.site.register(ContactMessage)

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    pass

