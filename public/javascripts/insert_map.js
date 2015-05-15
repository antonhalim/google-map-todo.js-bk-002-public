function insertMap(position) {
  var mapProp = {
      center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
      zoom:13,
      mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map_canvas"), mapProp);
  google.maps.event.addDomListener(window, 'load', this);
}
