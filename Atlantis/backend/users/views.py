from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate,login,logout
from django.core import serializers
from django.contrib.auth.models import User

def login_user(request):
  if request.method == "POST":
    print(request.POST)
    username = request.POST['username']
    password = request.POST['password']
    aadhar = request.POST['aadhar']
    user = authenticate(username=username,password=password)
    if not user == None:
      if user.citizen.aadhar == aadhar:
        login(request,user)
      else:
        return JsonResponse({
          'error':"Wrong Aadhar Id"
        })
    else:
      err = "Wrong Username or Password"
      return JsonResponse({
        'error':err
      })
    user = serializers.serialize('json', [request.user])
    logout(request)
    return HttpResponse(user, content_type="text/json-comment-filtered")
  
def register_user(request):
  if request.method == "POST":
    username = request.POST['username']
    password = request.POST['password']
    aadhar = request.POST['aadhar']
    print(username,password,aadhar)
    user = User.objects.create(username=username,password=password)
    citizen = user.citizen
    citizen.aadhar = aadhar
    citizen.save()
    login(request,user)
    user = User.objects.filter(id=user.id)
    user = serializers.serialize('json', user)
    return HttpResponse(user, content_type="text/json-comment-filtered")
    