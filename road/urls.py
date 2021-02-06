from django.urls import path
from django.views.generic import TemplateView
from .views import *
app_name = 'road'

urlpatterns = [
	path('road-data/',roaddata, name="road-data"),
	path('mapview/',MapView.as_view(),name='map-view'),
	path('test/',test,name='test'),
	path('addroad/',addroad,name='add-new-road'),
	path('deleteroad/',deleteRoad,name='delete-road'),
]
