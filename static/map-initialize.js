//Define a view
var view = new ol.View({
    // projection:'EPSG:4326',
    center:[ 49385535.40864292, 3199634.0803278475 ],
    // zoom:12
    zoom:16,
    maxZoom:18,
    minZoom:2,
});


map = new ol.Map({
    target:'map',
    view:view
});

//Define basemap
// const openStreetMapHumanitarian = new ol.layer.Tile({
//     source: new ol.source.OSM({
//         url:'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
//     }),
//     visible:true,
//     title:'OSMHumanitarian'
// })
// map.addLayer(openStreetMapHumanitarian)

//Basemaps Layers
const BingImage = new ol.layer.Tile({
    source: new ol.source.BingMaps({
        key:'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1',
        // use maxZoom 19 to see stretched tiles instead of the BingMaps
        // "no photos at this zoom level" tiles
        // maxZoom: 19
      }),
    visible:false,
    title:'BingImage'
});
map.addLayer(BingImage)
const openStreetMapStandard = new ol.layer.Tile({
    source : new ol.source.OSM(),
    visible:true,
    title:'OSMStandard'
});
map.addLayer(openStreetMapStandard);

const GoogleAerialImagery = new ol.layer.Tile({
    source: new ol.source.OSM({
        url:'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    }),
    visible:false,
    title:'GoogleAerialImagery'
});
map.addLayer(GoogleAerialImagery)

const GoogleHybrid = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url:'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
    }),
    visible:false,
    title:'GoogleHybrid'
});
map.addLayer(GoogleHybrid)

const ESRIimage = new ol.layer.Tile({
    source: new ol.source.XYZ({
        attributions:
          'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/' +
          'rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
        url:
          'https://server.arcgisonline.com/ArcGIS/rest/services/' +
          'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
      }),
    visible:false,
    title:'ESRIimage'
})
map.addLayer(ESRIimage)
//Layer Group

const BaseMapGroup = new ol.layer.Group({
    layers: [
        BingImage,openStreetMapStandard,GoogleAerialImagery,GoogleHybrid,ESRIimage
    ]

});
// map.addLayer(stamenTerrian);





// Layer Switcher logic for Basemaps
const baseLayerElements = document.querySelectorAll('.sidebar-1 > input[type=radio]');
for(let baseLayerElement of baseLayerElements){
baseLayerElement.addEventListener('change',function(){
    let baseLayerElementValue = this.value;
    console.log(baseLayerElement)
    BaseMapGroup.getLayers().forEach(function(element,index,array){
     let baseLayerTitle = element.get('title');
     element.setVisible(baseLayerTitle===baseLayerElementValue)
    //  console.log('baselayertitle:'+ baseLayerTitle,'baseLayerElementValue:'+baseLayerElementValue)
    })
})
}


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

