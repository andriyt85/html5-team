// JavaScript File
var mapOptions = {
  zoom: 16,
  center: {lat: 36.886409, lng: 30.699376},
};

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'),
  mapOptions);
    var marker;
    marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 36.886409, lng: 30.699376}  });
    marker.addListener('click', toggleBounce);
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
    
};

  
