from rest_framework import viewsets
from .models import AudioFile
from .serializers import AudioFileSerializer

class AudioFileView(viewsets.ModelViewSet):
    serializer_class = AudioFileSerializer
    queryset = AudioFile.objects.all()
