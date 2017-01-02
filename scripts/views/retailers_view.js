var retailersImages = [];

function handleRetailersPage() {
  function RetailersGallery(opts) {
    this.name = opts.name;
    this.address = opts.address;
    this.address_href = opts.address_href;
    this.href = opts.href;
  }

  RetailersGallery.prototype.toHtml = function() {
    var source = $('#retailers_template').html();
    var renderRetailersGallery = Handlebars.compile(source);
    return renderRetailersGallery(this);
  };

  retailersLocalData.forEach(function(element) {
    retailersImages.push(new RetailersGallery(element));
  });

  retailersImages.forEach(function(inst) {
    $('#retailers_list').append(inst.toHtml());
  });



  document.getElementById('retailers_link').removeEventListener('click', handleRetailersPage, false);

}


document.getElementById('retailers_link').addEventListener('click', handleRetailersPage);


handleRetailersPage();



var gr8 = {
  content: '<img src="" style="width:40px; height:40px">',
  latlong: {lat: 35.669123, lng: 139.705439},
};

var ansh46 = {
  content: '<img src="" style="width:40px; height:40px">',
  latlong: {lat: 51.919262, lng: 4.474245},
};

var a_ma_maniere = {
  content: '<img src="" style="width:40px; height:40px">',
  latlong: {lat: 33.778902, lng: -84.408111},
};

var km20 = {
  content: '<img src="" style="width:40px; height:40px">',
  latlong: {lat: 55.762010, lng: 37.624326},
};

var luisa_via_roma = {
  content: '<img src="" style="width:40px; height:40px">',
  latlong: {lat: 43.772477, lng: 11.254651},
};

var hypebeast = {
  content: '<img src="" style="width:40px; height:40px">',
  latlong: {lat: 40.720422, lng: -74.001735},
};

var lessons = {
  content: '<img src="" style="width:40px; height:40px">',
  latlong: {lat: -31.950630, lng: 115.856023},
};

var the_factory = {
  content: '<img src="" style="width:40px; height:40px">',
  latlong: {lat: 35.478364, lng: -97.513614},
};

var feature = {
  content: '<img src="" style="width:40px; height:40px">',
  latlong: {lat: 36.126128, lng: -115.188850},
};
var stone_soup = {
  content: '<img src="" style="width:40px; height:40px">',
  latlong: {lat: 37.983193, lng: 23.733610},
};
var flat_hat_club = {
  content: '<img src="" style="width:40px; height:40px">',
  latlong: {lat: 41.072991, lng: -81.512729},
};
var addicted = {
  content: '<h1 class="content">Addicted</h1><h2 class="content">Seoul, South Korea</h2>',
  latlong: {lat: 37.525826, lng: 127.037819},
};

function initMap() {
  minZoomLevel = 2;
  var center = {lat: 24.533116, lng: -126.128945};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: minZoomLevel,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  });
  var marker = new google.maps.Marker({
    position: gr8.latlong,
    map: map
  });

  var marker = new google.maps.Marker({
    position: ansh46.latlong,
    map: map
  });

  var marker = new google.maps.Marker({
    position: a_ma_maniere.latlong,
    map: map
  });

  var marker = new google.maps.Marker({
    position: km20.latlong,
    map: map
  });

  var marker = new google.maps.Marker({
    position: luisa_via_roma.latlong,
    map: map
  });

  var marker = new google.maps.Marker({
    position: hypebeast.latlong,
    map: map
  });

  var marker = new google.maps.Marker({
    position: lessons.latlong,
    map: map
  });

  var marker = new google.maps.Marker({
    position: the_factory.latlong,
    map: map
  });

  var marker = new google.maps.Marker({
    position: feature.latlong,
    map: map
  });

  var marker = new google.maps.Marker({
    position: stone_soup.latlong,
    map: map
  });

  var marker = new google.maps.Marker({
    position: flat_hat_club.latlong,
    map: map
  });

  var addictedMarker = new google.maps.Marker({
    position: addicted.latlong,
    map: map
  });


  var infoWindow = new google.maps.InfoWindow({
    content: addicted.content,
  });

  addictedMarker.addListener('click', function() {
    infoWindow.open(map, addictedMarker);
  });
}

$('#retailers_link').on('click', initMap);
