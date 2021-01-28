

map.getLayers().forEach(function(element,index,array){
         let baseLayerTitle = element.get('title');
         // console.log('layers',baseLayerTitle)
         element.setVisible(baseLayerTitle)
         // console.log('element',element.setVisible(baseLayerTitle===baseLayerElementValue))
        //  console.log('baselayertitle:'+ baseLayerTitle,'baseLayerElementValue:'+baseLayerElementValue)
        })


const overlayContainerElement = document.querySelector('.overlay-container');
    const overlayLayer = new ol.Overlay({
        element:overlayContainerElement
    })
    map.addOverlay(overlayLayer);
    const overlayFeatureName = document.getElementById('feature-name')
    const overlayFeatureAdditionInfo = document.getElementById('feature-additional-info')


    map.on('click',function(e){
         overlayLayer.setPosition(undefined);
        map.forEachFeatureAtPixel(e.pixel,function(feature,layer){
            let clickedCoordinate = e.coordinate;
            let clickedFeatureName = feature.get('name');
            let clickedFeatureAdditionInfo = feature.get('additionalInfo');
            overlayLayer.setPosition(clickedCoordinate);
            overlayFeatureName.innerHTML = clickedFeatureName;
            overlayFeatureAdditionInfo.innerHTML = clickedFeatureAdditionInfo;


        })
    })