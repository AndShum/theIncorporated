var retailersImages = [];

function handleRetailersPage() {
  function RetailersGallery(opts) {
    this.name = opts.name;
    this.address = opts.address;
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

  // function setDisplay() {
  //   $('#retailers_link').on('click', function() {
  //     $('#retailers_gallery').css({'display':'flex'});
  //   });
  // }
  //
  // setDisplay();

  function handleCollections() {
    $('.collections').on('click', function() {
      $('.collections').css({'border-bottom':'none'});
      $('.collections_ul').addClass('showing').slideToggle('slow');
    });
  }
  document.getElementById('retailers_link').removeEventListener('click', handleRetailersPage, false);

}


document.getElementById('retailers_link').addEventListener('click', handleRetailersPage);


handleRetailersPage();



var gr8 = {
  content: '<img src="http://gr8.jp/image/logo2.png" style="width:40px; height:40px">',
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

function initMap() {
  minZoomLevel = 2;
  var center = {lat: 28.373031, lng: -0.211098};
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





  var infoWindow = new google.maps.InfoWindow({
    content: gr8.content
  });
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}

$('#retailers_link').on('click', initMap);
