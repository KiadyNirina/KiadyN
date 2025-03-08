from django.db import models

class Views(models.Model):
    number = models.IntegerField(default=0)

    def __str__(self):
        return f"Views: {self.number}"