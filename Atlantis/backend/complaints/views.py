from .models import Complaint
from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import redirect

def all(request):
  complaints = Complaint.objects.filter()
  complaints = serializers.serialize('json', complaints)
  return HttpResponse(complaints, content_type="text/json-comment-filtered")

def create_complaint(request):
  if request.method == "POST":
    complaint = Complaint()
    complaint.user = request.POST["full_name"]
    complaint.complaint = request.POST["Charges"]
    complaint.email = request.POST["email"]
    complaint.contact = request.POST["contact"]
    complaint.aadhar = request.POST["aadhar"]
    complaint.description = request.POST["message"]
    complaint.save()
    return redirect('http://localhost:3000/home')