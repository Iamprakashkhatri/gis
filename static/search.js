
  var externalSource = new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      url:'static/data/vector_data/sample.geojson'
  })
  
  // var writer = new ol.format.GeoJSON();

  // draw = new ol.interaction.Draw({
  //     source: externalSource,
  //     type: ("Polygon")
  // });
  // map.addInteraction(draw);

  // // From an onclick event
  // var geojsonStr = writer.writeFeatures(externalSource.getFeatures());
  // console.log(geojsonStr);


  console.log(name)
  if (name) {

    var SearchLayer = new ol.layer.Vector({
      source:externalSource,
      style: function(feature){
        if(feature.getProperties().prop===name){
          // console.log('feature',feature)
          return new ol.style.Style({
              fill:new ol.style.Fill({
                  color:'#ff0000'
              }),
              stroke: new ol.style.Stroke({
                  color:'#000000',
                  width:3
              })
        })
        }
        else {
          // console.log('feature-else',feature)
          return null
        }
      }
  })

map.addLayer(SearchLayer)

  }
else {
  map.removeLayer(SearchLayer)
}
  

function getAllofEm () {

var allLayers = [];

var mapLayers = map.getLayers().getArray();
console.log('layers',mapLayers)

mapLayers.forEach(function (layer, i) {
  console.log('layer',layer)
    if (layer instanceof ol.layer.Group && layer.getVisible() == true ) {
        layer.getLayers().getArray().forEach(function(sublayer, j, layers) {
            allLayers.push(sublayer);
            console.log('layers-equal',allLayers)
        })
    } else if ( !(layer instanceof ol.layer.Group) && layer.getVisible() == true ) {
            allLayers.push(layer);
            console.log('layers-unequal',layer[1])
    }
});

return allLayers;
}

getAllofEm()
