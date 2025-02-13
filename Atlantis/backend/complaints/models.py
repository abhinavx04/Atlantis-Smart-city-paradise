from django.db import models

class Complaint(models.Model):
  user = models.TextField(null=True)
  aadhar = models.TextField(null=True)
  contact = models.TextField(null=True)
  complaint = models.TextField(null=True)
  description = models.TextField(null=True)
  email = models.TextField(null=True)
  
  def __str__(self):
    return self.title[:50]