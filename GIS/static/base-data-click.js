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