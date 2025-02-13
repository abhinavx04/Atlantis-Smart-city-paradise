from django.http import HttpResponse
from django.shortcuts import redirect
from .models import Announcements
import json 
from django.core import serializers

def all(request):
  announcements = Announcements.objects.filter()
  announcements = serializers.serialize('json', announcements)
  return HttpResponse(announcements, content_type="text/json-comment-filtered")

def create_announcement(request):
  if request.method == "POST":
      title = request.POST["subject"]
      description = request.POST["message"]
      name = request.POST["name"]
      date = request.POST["date"]
      announcement = Announcements()
      announcement.title = title
      announcement.description = description
      announcement.name = name
      announcement.date = date
      announcement.save()
      return redirect('http://localhost:3000/home')