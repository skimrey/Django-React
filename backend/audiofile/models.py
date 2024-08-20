from django.db import models

class AudioFile(models.Model):
    title = models.CharField(max_length=100)
    file = models.FileField(default='Song',upload_to='audio/')
    description = models.TextField()
    completed = models.BooleanField(default=False)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
