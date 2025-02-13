from django.urls import path
from . import views

urlpatterns = [
    path('',views.all,name="all-suggestions"),
    path('create/',views.create,name="create-suggestion")
]
