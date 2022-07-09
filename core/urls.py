from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from core.views import DataItemView, ContactItemView



urlpatterns = [
    path('get_data/', DataItemView.as_view()),
    path('contact/', ContactItemView.as_view())
]