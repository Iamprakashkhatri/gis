

const fillStyle  = new ol.style.Fill({
        color:'rgba(255,255,255,0.5)'
    })

const strokeStyle = new ol.style.Stroke({
    color:[46,45,45,1]
})

const circleStyle = new ol.style.Circle({
        fill:new ol.style.Fill({
            color:[245,49,5,1]
        }),
        radius:7,
        stroke:strokeStyle
    })

const RoadNetworkSource = new ol.source.Vector({
        url:'static/data/vector_data/sample.geojson',
        format: new ol.format.GeoJSON()
    })

const RoadNetworkGeoJSON = new ol.layer.VectorImage({
        source:RoadNetworkSource,
        visible:true,
        title:'roadnetwork',
        style: new ol.style.Style({
            fill:fillStyle,
            stroke:strokeStyle,
        })

    });

const BridgeGeoJSON = new ol.layer.VectorImage({
    source: new ol.source.Vector({
        url:'static/data/vector_data/polygon.geojson',
        format: new ol.format.GeoJSON()

    }),
    visible:true,
    title:'bridge',
    style: new ol.style.Style({
            fill:fillStyle,
            stroke:strokeStyle,
        })

});

const CauseWayGeoJSON = new ol.layer.VectorImage({
    source: new ol.source.Vector({
        url:'static/data/vector_data/feature.geojson',
        format: new ol.format.GeoJSON()

    }),
    visible:true,
    title:'causeway',
    style: new ol.style.Style({
            fill:fillStyle,
            stroke:strokeStyle,
            // image:circleStyle
        })

});

var highlightStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: 'rgba(255,255,0,0.7)',
  }),
  stroke: new ol.style.Stroke({
    color: '#000000',
    width: 3,
  }),
});

var selected = null;

map.on('pointermove', function (e) {
  if (selected !== null) {
    selected.setStyle(undefined);
    selected = null;
  }

    map.forEachFeatureAtPixel(e.pixel, function (f) {
    selected = f;
    f.setStyle(highlightStyle);
    return true;
    });

    if (selected) {
        // console.log('selected',selected)
    status.innerHTML = '&nbsp;Hovering: ' + selected.get('name');
  } else {
    // console.log('selected',selected)
    status.innerHTML = '&nbsp;';
  }


});
