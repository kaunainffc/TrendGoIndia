from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    """
    Custom User model for TrendGoIndia project.
    Inherits from Django's AbstractUser.
    Add any additional fields here.
    """
    is_admin = models.BooleanField(default=False)  # Example custom field

    # You can add more custom fields here, e.g.:
    # profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    # phone_number = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return self.username
