from django.http import JsonResponse
from .models import PageView

def page_view_count(request):
    view, created = PageView.objects.get_or_create(id=1)
    view.count += 1
    view.save()
    return JsonResponse({'views': view.count})  
