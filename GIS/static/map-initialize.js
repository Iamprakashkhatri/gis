//Define a view
    var view = new ol.View({
        // projection:'EPSG:4326',
        center:[49253157.912697524, 3344663.1138488394 ],
        // zoom:12
        zoom:7,
        maxZoom:18,
        minZoom:2,
    });
    
    
    map = new ol.Map({
        target:'map',
        view:view
    });

    //Define basemap
    const openStreetMapHumanitarian = new ol.layer.Tile({
        source: new ol.source.OSM({
            url:'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        }),
        visible:true,
        title:'OSMHumanitarian'
    })
    map.addLayer(openStreetMapHumanitarian)

var readInputVariables = function(){
  $('input:text').each(function(index,element){
      console.log(element.val()); // do whatever you want with the value;
  })
}


// document.addEventListener("keypress", function(event) {
//     if (event.keyCode === 13) {
//         console.log(event.keyCode)
//         name = document.getElementById("myInput").value;
//         console.log('name',name)
//     }
// });

