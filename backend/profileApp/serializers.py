from rest_framework import serializers
from .models import profileApp

class profileAppSerializer(serializers.ModelSerializer):
  class Meta:
    model = profileApp
    fields = ('id', 'firstName', 'lastName', 'picture', 'description', 'age', 'gender')