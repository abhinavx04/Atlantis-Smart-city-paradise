from .models import Suggestion
from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import redirect

def all(request):
  suggestions = Suggestion.objects.filter()
  suggestions = serializers.serialize('json', suggestions)
  return HttpResponse(suggestions, content_type="text/json-comment-filtered")

def create(request):
  if request.method == "POST":
    suggestion = Suggestion()
    suggestion.user = request.POST["full_name"]
    suggestion.description = request.POST["message"]
    suggestion.aadhar = request.POST["aadhar"]
    suggestion.contact = request.POST["phone_number"]
    suggestion.save()
    return redirect("http://localhost:3000/home")