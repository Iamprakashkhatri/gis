from django.contrib.gis.db import models
from django.db.models import Manager as GeoManager


class Roads(models.Model):
	name = models.CharField(max_length=200)
	# location = models.PointField(null=True,blank=True)
	geom = models.MultiPolygonField(srid=4326,null=True,blank=True)
	objects = GeoManager()

	def __str__(self):
		return self.name
