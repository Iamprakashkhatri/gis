from pathlib import Path
from django.contrib.gis.utils import LayerMapping
from django.contrib.gis.gdal import DataSource
from .models import Roads

road_mapping = {
    'section_code' : 'Section_co',
    'road_code' : 'Roade_code',
    'geom' : 'MULTILINESTRING',
}

world_shp = Path(__file__).resolve().parent /'sunwal_road.geojson'
ds = (str(world_shp))

def run(verbose=True):
    lm = LayerMapping(Roads, ds, road_mapping, transform=False)
    # print('m',lm)
    lm.save(strict=True, verbose=verbose)