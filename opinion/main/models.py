from django.db import models

class User(models.Model):
    email = models.EmailField(max_length=32)
    password = models.CharField(max_length=32)
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.id} {self.email}'