from django.contrib.gis import admin as gis_admin

class SecureOSM(gis_admin.OSMGeoAdmin):
    openlayers_url = 'https://cdnjs.cloudflare.com/ajax/libs/openlayers/2.13.1/OpenLayers.js'

from django.contrib import admin
from django.contrib.gis.db import models
from django.contrib.gis.forms.widgets import BaseGeometryWidget

class CustomOpenLayersWidget(BaseGeometryWidget):
    template_name = 'gis/openlayers.html'

    def __init__(self, attrs=None):
        super(CustomOpenLayersWidget, self).__init__(attrs)

    class Media:
        js = (
            'https://cdnjs.cloudflare.com/ajax/libs/openlayers/2.13.1/OpenLayers.js',
            'gis/js/OLMapWidget.js',
        )


class CustomModelAdmin(admin.ModelAdmin):
    """Need to change default URL of OpenLayers"""
    formfield_overrides = {
        models.PointField: {"widget": CustomOpenLayersWidget},
        models.PointField: {"widget": CustomOpenLayersWidget},
        models.PolygonField: {"widget": CustomOpenLayersWidget},
        models.LineStringField: {"widget": CustomOpenLayersWidget},

        # Adding other models Fields if need
    }
