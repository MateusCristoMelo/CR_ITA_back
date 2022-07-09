from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from core.views import DataItemView



urlpatterns = [
    path('get_data/', DataItemView.as_view())
]