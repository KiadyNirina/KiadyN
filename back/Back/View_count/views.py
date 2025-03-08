from django.http import JsonResponse
from .models import Views

def page_view_count(request):
    view, created = Views.objects.get_or_create(id=1)
    view.number += 1
    view.save()
    return JsonResponse({'views': view.number})  
