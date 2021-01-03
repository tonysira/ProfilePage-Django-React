from django.db import models

# Create your models here.
class profileApp(models.Model):
    GENDER = (
        ('male', 'male'),
        ('female', 'female'),
        ('genderless', 'genderless'),
    )
    firstName = models.CharField(max_length=60)
    lastName = models.CharField(max_length=60)
    picture = models.CharField(max_length=120, default='https://pbs.twimg.com/profile_images/1069226824046190592/FWqoiqOa_400x400.jpg')
    description = models.TextField()
    age = models.IntegerField()
    gender = models.CharField(
        max_length=60,
        choices=GENDER,
        default='genderless'
    )

    def _str_(self):
        return self.firstName + " " + self.lastName