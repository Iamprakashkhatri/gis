from django.contrib.gis.db import models
from django.db.models import Manager as GeoManager


class Roads(models.Model):
	section_code = models.CharField(max_length=100,null=True,blank=True)
	road_code = models.CharField(max_length=150)
	name = models.CharField(max_length=200,null=True,blank=True)
	# prov_code = models.IntegerField()
	# prov_name_1 = models.CharField(max_length=200)
	# prov_name_2 = models.CharField(max_length=200)
	# district_code = models.CharField(max_length=200)
	# district_name = models.CharField(max_length=200)
	# district_1 = models.CharField(max_length=200)
	# IDO_name = models.CharField(max_length=200)
	# length_km = models.IntegerField(null=True,blank=True)
	# location = models.PointField(null=True,blank=True)
	geom = models.MultiLineStringField(srid=4326,null=True,blank=True,geography=True)
	objects = GeoManager()

	# def __str__(self):
	# 	return self.road_code
