export function createGoogleMap(mapRef, center) {
  let mapConfig = {
    zoom: 8,
    disableDefaultUI: false,
    center: center
  };

  return new window.google.maps.Map(mapRef, mapConfig);
}

export function createMarker(mapObj, markerConfig) {
  let { text, lat, lng } = markerConfig;
  let markerObj = {
    map: mapObj,
    position: { lat, lng },
    label: {
      color: "white",
      fontWeight: "bold",
      title: text
    }
  };

  let infowindow = new window.google.maps.InfoWindow({
    content: text
  });

  let marker = new window.google.maps.Marker(markerObj);

  marker.addListener("click", function() {
    infowindow.open(mapObj, marker);
  });

  return marker;
}
