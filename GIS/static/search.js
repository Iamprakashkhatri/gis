
document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        console.log(event.keyCode)
        name = document.getElementById("myInput").value;
        console.log('name',name)
    }
});

var propLayer = new ol.layer.Vector({
      source:RoadNetworkSource,
      style: function(feature){
        if(feature.getProperties().prop=="a"){
          console.log('------')
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
          console.log('error')
        }
        
      }
  })

map.addLayer(propLayer)

