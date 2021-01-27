

map.getLayers().forEach(function(element,index,array){
         let baseLayerTitle = element.get('title');
         // console.log('layers',baseLayerTitle)
         element.setVisible(baseLayerTitle)
         // console.log('element',element.setVisible(baseLayerTitle===baseLayerElementValue))
        //  console.log('baselayertitle:'+ baseLayerTitle,'baseLayerElementValue:'+baseLayerElementValue)
        })