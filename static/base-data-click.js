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

  $(document).ready(function () {
      $("#causeway").click(function () {
        if ($(this).prop("checked") == true) {
          map.addLayer(CauseWayGeoJSON);


        }
        else if ($(this).prop("checked") == false) {
          map.removeLayer(CauseWayGeoJSON);

        }
      });
  })

document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        console.log(event.keyCode)
        name = document.getElementById("myInput").value;
        console.log('name',name)
    }
    else{
      map.removeLayer(RoadNetworkSource)
    }
});

$(document).ready(function () {
      $("#drawnewlayer").click(function () {
        if ($(this).prop("checked") == true) {
          var drawSource = new ol.source.Vector()
          var currentProcess = new ol.interaction.Draw({
                        source: drawSource,
                        type: 'MultiLineString'});
                    map.addInteraction(currentProcess);
                    currentProcess.on('drawend', function (e) {
                        console.log("drawend");
                        var format = new ol.format.WKT();
                        e.feature.getGeometry();
                        var wkt = format.writeFeature(e.feature);
                        console.log('wkt',wkt)
                        if (wkt!==null){
                            $.ajax({
                                  url: "http://127.0.0.1:8000/addroad/",
                                  data: {
                                    'coordinates': wkt,
                                  },
                                  dataType: 'json',
                                  success: function (data) {
                                    // console.log(data)
                                      // send_email(data['id'],data['status']);

                                   
                                   (window.jQuery),
                                      function (i) {
                                         "use strict";
                                         console.log(i)
                                         i.NotificationApp.send("Update !", `Order Status Updated`, "top-right", "#3b98b5", "info")

                                      }(window.jQuery);
                                    // document.getElementById('order_status_').innerText=data['status'];
                                  }
                                });
                          }
                        // data.Geom = wkt;
                        // self.Map.olMap.removeInteraction(currentProcess);
                    });


        }
        else if ($(this).prop("checked") == false) {
          map.removeInteraction(currentProcess);

        }
      });
  })
