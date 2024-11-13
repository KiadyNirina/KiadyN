from django.urls import path
from .views import page_view_count

urlpatterns = [
    path('api/views/', page_view_count, name='page_view_count'),
]