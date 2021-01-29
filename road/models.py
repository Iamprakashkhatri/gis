from django.contrib.gis.db import models

class Road(models.Model):
	name = models.CharField(max_length=200)
	# location = models.PointField(null=True,blank=True)
	geom = models.MultiPolygonField(srid=4326,null=True,blank=True)

	def __str__(self):
		return self.name
