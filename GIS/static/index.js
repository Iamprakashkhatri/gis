                  
map.getLayers().forEach(function(element,index,array){
         let baseLayerTitle = element.get('title');
         // console.log('layers',baseLayerTitle)
         element.setVisible(baseLayerTitle)
         // console.log('element',element.setVisible(baseLayerTitle===baseLayerElementValue))
        //  console.log('baselayertitle:'+ baseLayerTitle,'baseLayerElementValue:'+baseLayerElementValue)
        })


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


const overlayContainerElement = document.querySelector('.overlay-container');
    const overlayLayer = new ol.Overlay({
        element:overlayContainerElement
    })
    map.addOverlay(overlayLayer);
    const overlayFeatureName = document.getElementById('feature-name')
    const overlayFeatureAdditionInfo = document.getElementById('feature-additional-info')


    map.on('click',function(e){
         // overlayLayer.setPosition(undefined);
        map.forEachFeatureAtPixel(e.pixel,function(feature,layer){
            $('.tbodyContent').remove();
            var tbody = '<tbody class="tbodyContent">';
            console.log('e',feature)
            console.log('id',feature.getProperties()['pk'])

            for (var key in feature.getProperties()) {
              console.log('key',key)
              console.log('feature.getProperties',feature.getProperties()[key])


                tbody +=
                    ('<tr class="center aligned"><td>' + key + '</td><td>' + feature.getProperties()[key] + '</td></tr>');
            }


            $('#attribute').append(tbody + '</tbody>');
            $('#attr').fadeIn(300);

            $(document).ready(function () {
                $("#delete").click(function () {
                  if (feature.getProperties()['pk']){
                    $.ajax({
                            url: "http://127.0.0.1:8000/deleteroad/",
                            data: {
                              'pk': feature.getProperties()[key],
                            },
                            dataType: 'json',
                            success: function (data) {
                              // console.log(data)
                                // send_email(data['id'],data['status']);

                             
                             (window.jQuery),
                                function (i) {
                                   "use strict";
                                   console.log(i)
                                   i.NotificationApp.send("Delete !", `Layer of road deleted`, "top-right", "#3b98b5", "info")

                                }(window.jQuery);
                              // document.getElementById('order_status_').innerText=data['status'];
                            }
                          });
                  }
                  
                });
            })

            // map.panTo(e.latlng);
            // select(e.target);



        })
    })

    


    // map.on('click',function(e){
    //   $('.tbodyContent').remove();
    //   var tbody = '<tbody class="tbodyContent">';
    //   console.log('e',e.target.feature)
    //   for (var key in e.target.feature.getProperties()) {


    //       tbody +=
    //           ('<tr class="center aligned"><td>' + key + '</td><td>' + e.target.feature.properties[key] + '</td></tr>');
    //   }


    //   $('#attribute').append(tbody + '</tbody>');
    //   $('#attr').fadeIn(300);
    //   // map.panTo(e.latlng);
    //   select(e.target);

    // })

    // onEachFeature: function(feature, layer) {
    //         layer.myTag = subCategory;
    //         layer.on({

    //             'mouseover': function(e) {
    //                 highlight(e.target);
    //             },
    //             'mouseout': function(e) {
    //                 dehighlight(e.target);
    //             },

    //             'click': function(e) {
    //                 $('.tbodyContent').remove();
    //                 var tbody = '<tbody class="tbodyContent">';
    //                 for (var key in e.target.feature.properties) {


    //                     tbody +=
    //                         ('<tr class="center aligned"><td>' + key + '</td><td>' + e.target.feature.properties[key] + '</td></tr>');
    //                 }


    //                 $('#attribute').append(tbody + '</tbody>');
    //                 $('#attr').fadeIn(300);
    //                 // map.panTo(e.latlng);
    //                 select(e.target);


    //             }


    //         });

    //     }