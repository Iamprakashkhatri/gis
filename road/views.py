from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.generic import TemplateView
# from django.utils import simplejson
from django.core import serializers
from .models import Road
import json

def roaddata(request):
    get_roads = Road.objects.all()
    # if(id):
    #     road = get_roads.filter(pk=id)
    boundary = serializers.serialize('geojson', get_roads)

    # json_str = simplejson.dumps(road)
    return HttpResponse(boundary, content_type='JSON') 

class MapView(TemplateView):
	template_name="index.html"