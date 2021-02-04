
$(document).ready(function () {
      $("#drawnewlayer").click(function () {
        if ($(this).prop("checked") == true) {
          var drawSource = new ol.source.Vector()
          var currentProcess = new ol.interaction.Draw({
                        source: drawSource,
                        type: 'LineString'});
                    // map.addInteraction(currentProcess);
                    currentProcess.on('drawend', function (e) {
                        console.log("drawend");
                        var format = new ol.format.WKT();
                        e.feature.getGeometry();
                        var wkt = format.writeFeature(e.feature);
                        console.log('wkt',wkt);


                        
                        // data.Geom = wkt;
                        // self.Map.olMap.removeInteraction(currentProcess);
                    });


        }
        else if ($(this).prop("checked") == false) {
          map.removeInteraction(currentProcess);

        }
      });
  })

                    // $("#drawnewlayer").click(function () {

                    // if (wkt!==null) {
                  //   $.ajax({
                  //         url: '{%url 'road:draw-new-road'%}',
                  //         data: {
                  //           'coordinates': wkt,
                  //         },
                  //         console.log('----------')
                  //         dataType: 'json',
                  //         success: function (data) {
                  //           if(data['unconfirmed_count'] === 0){
                  //                 $("#unconfirmed_order_text").hide();
                  //             }else{
                  //                 $("#unconfirmed_order_text").show();
                  //                 $("#unconfirmed_order_text").text(data['unconfirmed_count']);
                  //                 $("#unconfirmed_order_text").attr('class', 'badge label-table badge-danger');
                  //                 console.log('--p',data)


                  //             }

                  //             // send_email(data['id'],data['status']);

                           
                  //          (window.jQuery),
                  //             function (i) {
                  //                "use strict";
                  //                i.NotificationApp.send("Update !", `Order Status Updated`, "top-right", "#3b98b5", "info")

                  //             }(window.jQuery);
                  //           document.getElementById('order_status_').innerText=data['status'];
                  //         }
                  //       });
                  // }
                    //     // data.Geom = wkt;
                    //     // self.Map.olMap.removeInteraction(currentProcess);
                    // });


// map.getLayers().forEach(function(element,index,array){
//          let baseLayerTitle = element.get('title');
//          // console.log('layers',baseLayerTitle)
//          element.setVisible(baseLayerTitle)
//          // console.log('element',element.setVisible(baseLayerTitle===baseLayerElementValue))
//         //  console.log('baselayertitle:'+ baseLayerTitle,'baseLayerElementValue:'+baseLayerElementValue)
//         })


// const overlayContainerElement = document.querySelector('.overlay-container');
//     const overlayLayer = new ol.Overlay({
//         element:overlayContainerElement
//     })
//     map.addOverlay(overlayLayer);
//     const overlayFeatureName = document.getElementById('feature-name')
//     const overlayFeatureAdditionInfo = document.getElementById('feature-additional-info')


//     map.on('click',function(e){
//          overlayLayer.setPosition(undefined);
//         map.forEachFeatureAtPixel(e.pixel,function(feature,layer){
//             let clickedCoordinate = e.coordinate;
//             let clickedFeatureName = feature.get('section_code');
//             let clickedFeatureAdditionInfo = feature.get('road_code');
//             overlayLayer.setPosition(clickedCoordinate);
//             overlayFeatureName.innerHTML = clickedFeatureName;
//             overlayFeatureAdditionInfo.innerHTML = clickedFeatureAdditionInfo;


//         })
//     })