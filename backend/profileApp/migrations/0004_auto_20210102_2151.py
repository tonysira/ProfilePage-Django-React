# Generated by Django 3.1.4 on 2021-01-02 21:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profileApp', '0003_auto_20210102_2145'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profileapp',
            name='gender',
            field=models.CharField(choices=[('male', 'male'), ('female', 'female'), ('genderless', 'genderless')], default='genderless', max_length=60),
        ),
    ]
