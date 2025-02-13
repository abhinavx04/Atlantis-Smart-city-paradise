from django.db import models
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.contrib.auth.models import User

class Citizen(models.Model):
  user = models.OneToOneField(User,on_delete=models.CASCADE)
  aadhar = models.CharField(max_length=255,null=True)
  
  def __str__(self):
    return self.user.username

@receiver(post_save,sender=User)
def create_citizen(sender,instance,created,**kwargs):
  if created:
    citizen = Citizen()
    citizen.user = instance
    citizen.save()