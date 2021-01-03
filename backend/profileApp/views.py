from django.shortcuts import render
from rest_framework import viewsets
from .serializers import profileAppSerializer
from .models import profileApp

class profileAppView(viewsets.ModelViewSet):
    serializer_class = profileAppSerializer
    queryset = profileApp.objects.all()
