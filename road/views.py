from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.generic import TemplateView
# from django.utils import simplejson
from django.core import serializers
from .models import Roads
import json

def roaddata(request):
    get_roads = Roads.objects.all()
    # if(id):
    #     road = get_roads.filter(pk=id)
    boundary = serializers.serialize('geojson', get_roads)
    print('boundary',boundary)

    # json_str = simplejson.dumps(road)
    return HttpResponse(boundary, content_type='JSON') 

class MapView(TemplateView):
	template_name="index.html"

import xlrd
from collections import OrderedDict
import json

def test(request):
	wb = xlrd.open_workbook("/home/prakash/GIS/GIS/static/excel/sample.xls")
	sh = wb.sheet_by_index(0)
	print("wb",wb)
	data_list = []
	for rownum in range(1,sh.nrows):
		data = dict()
		row_values = sh.row_values(rownum)
		# data['0']=row_values[0]
		# print('data[0]',data[0])
		data['First Name'] = row_values[1]
		data['Last Name '] = row_values[2]
		data['Gender'] = row_values[3]
		data['Country'] = row_values[4]
		data['Age'] = row_values[5]
		data['date'] = row_values[6]
		data['id'] = row_values[7]
		data_list.append(data)
	print('data',data_list)
	jsondata = json.dumps(data_list)
	# jsondata = serializers.serialize('geojson', json.dumps(list(data_list)))
	print('jsondata',jsondata)
	return HttpResponse(jsondata, content_type='JSON') 


