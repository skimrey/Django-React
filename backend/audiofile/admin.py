from django.contrib import admin
from .models import AudioFile

class AudioFileAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(AudioFile, AudioFileAdmin)