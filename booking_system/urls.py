from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('appointments.urls')),  # Include the URLs for the appointments app
]