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