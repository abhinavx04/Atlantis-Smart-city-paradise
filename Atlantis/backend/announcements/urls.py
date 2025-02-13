from django.urls import path
from . import views

urlpatterns = [
    path('',views.all,name="all-announcements"),
    path('create/',views.create_announcement,name="create-announcement")
]
