from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

# Simple root view
def home(request):
    return HttpResponse("Welcome to TrendGoIndia API!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),
    path('api/posts/', include('posts.urls')),
    path('api/products/', include('products.urls')),
    path('', home),  # <- Add this line for root URL
]
