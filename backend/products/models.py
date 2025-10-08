from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    affiliate_url = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.name
