  var externalSource = new ol.source.Vector({
      format: new ol.format.GeoJSON(),
      url:'static/data/vector_data/sample.geojson'
  })
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
  

