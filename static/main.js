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

    const fillStyle  = new ol.style.Fill({
        color:'#3399CC'
    })

    const strokeStyle = new ol.style.Stroke({
        color:[46,45,45,1]
    })


    const RoadNetworkGeoJSON = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url:'static/data/vector_data/map.geojson',
            format: new ol.format.GeoJSON()

        }),
        visible:true,
        title:'roadnetwork',
        style: new ol.style.Style({
            fill:fillStyle,
            stroke:strokeStyle,
        })

    });

    const BridgeGeoJSON = new ol.layer.VectorImage({
        source: new ol.source.Vector({
            url:'static/data/vector_data/map-2.geojson',
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
            url:'static/data/vector_data/map-2.geojson',
            format: new ol.format.GeoJSON()

        }),
        visible:false,
        title:'causeway',

    });



    // const LayersGroup = new ol.layer.Group({
    //     layers: [
    //         RoadNetworkGeoJSON,BridgeGeoJSON,CauseWayGeoJSON
    //     ]

    // })
    // map.addLayer(LayersGroup)

    // Layer Switcher logic

    $(document).ready(function () {
      $("#roadnetwork").click(function () {
        if ($(this).prop("checked") == true) {
          map.addLayer(RoadNetworkGeoJSON);


        }
        else if ($(this).prop("checked") == false) {
          map.removeLayer(RoadNetworkGeoJSON);

        }
      });
  })

    $(document).ready(function () {
      $("#bridge").click(function () {
        if ($(this).prop("checked") == true) {
          map.addLayer(BridgeGeoJSON);


        }
        else if ($(this).prop("checked") == false) {
          map.removeLayer(BridgeGeoJSON);

        }
      });
  })

var highlightStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: 'rgba(255,255,255,0.7)',
  }),
  stroke: new ol.style.Stroke({
    color: '#3399CC',
    width: 3,
  }),
});

var selected = null;
console.log('sele',)

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
        console.log('selected',selected)
    status.innerHTML = '&nbsp;Hovering: ' + selected.get('bridge');
  } else {
    console.log('selected',selected)
    status.innerHTML = '&nbsp;';
  }


});

  map.getLayers().forEach(function(element,index,array){
         let baseLayerTitle = element.get('title');
         // console.log('layers',baseLayerTitle)
         element.setVisible(baseLayerTitle)
         // console.log('element',element.setVisible(baseLayerTitle===baseLayerElementValue))
        //  console.log('baselayertitle:'+ baseLayerTitle,'baseLayerElementValue:'+baseLayerElementValue)
        })

    // const baseLayerElements = document.querySelectorAll('.sidebar > input[type=checkbox]');
    // for(let baseLayerElement of baseLayerElements){
    // baseLayerElement.addEventListener('change',function(){
    //     let baseLayerElementValue = this.value;
    //     console.log(baseLayerElement)
    //     map.getLayers().forEach(function(element,index,array){
    //      let baseLayerTitle = element.get('title');
    //      console.log('layers',baseLayerTitle)
    //      element.setVisible(baseLayerTitle===baseLayerElementValue)
    //      console.log('element',element.setVisible(baseLayerTitle===baseLayerElementValue))
    //     //  console.log('baselayertitle:'+ baseLayerTitle,'baseLayerElementValue:'+baseLayerElementValue)
    //     })
    // })
    // }