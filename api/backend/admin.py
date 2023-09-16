from django.contrib import admin
from .models import Task

# Register your models here.

# Example for future reference
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register model
admin.site.register(Task, TaskAdmin)
