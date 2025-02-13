from urllib.parse import urlparse
from django.urls import path
from . import views

urlpatterns = [
    path('',views.all,name="all-complaints"),
    path('create/',views.create_complaint,name="create-complaint")
]
