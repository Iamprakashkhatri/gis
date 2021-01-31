from django.contrib import admin
from django.contrib.gis import admin as gis_admin
from .models import Roads

admin.site.register(Roads,gis_admin.OSMGeoAdmin)
# from leaflet.admin import LeafletGeoAdmin
# admin.site.register(Roads,LeafletGeoAdmin)

# @admin.register(Roads)
# class RoadsAdmin(CustomModelAdmin):
#     pass
