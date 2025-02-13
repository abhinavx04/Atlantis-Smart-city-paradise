from django.db import models
from users.models import Citizen

class Announcements(models.Model):
  name = models.TextField(null=True)
  date = models.TextField(null=True)
  description = models.TextField(null=True)
  title = models.TextField(null=True)
  
  def __str__(self):
    return self.title[:50]