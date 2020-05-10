# from django.contrib.auth.models import AbstractUser
from django.db import models


class SiteUser (models.Model):
    organization = models.CharField(max_length=255, blank=True, null=True)
    email_verified = models.BooleanField(default=False)
    provides_stock = models.BooleanField(default=False)
    needs_stock = models.BooleanField(default=False)
    street_1 = models.CharField(max_length=255)
    street_2 = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255)
    county = models.CharField(max_length=255)
    state = models.CharField(max_length=2)
    zip = models.CharField(max_length=9)
    phone = models.CharField(max_length=10)

class FinalProjectModel (models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    favorite_number = models.IntegerField(default=0)
