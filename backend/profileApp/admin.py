from django.contrib import admin
from .models import profileApp

class profileAppAdmin(admin.ModelAdmin):
  profile_display = ('firstName', 'lastName', 'picture', 'description', 'age', 'gender')

admin.site.register(profileApp, profileAppAdmin)
