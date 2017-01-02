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

function initMap() {
  minZoomLevel = 2;
  var center = {lat: 34.047653, lng: -5.831988};
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

  var gr8 = {
    content: '<a href="http://gr8.jp/gr8.html" target="_blank"><h2 class="content">Gr8</h2></a><h3 class="content">Tokyo, Japan</h3>',
    latlong: {lat: 35.669123, lng: 139.705439},
  };
  var gr8Marker = new google.maps.Marker({
    position: gr8.latlong,
    map: map
  });
  var gr8InfoWindow = new google.maps.InfoWindow({
    content: gr8.content,
  });
  gr8Marker.addListener('click', function() {
    gr8InfoWindow.open(map, gr8Marker);
  });



  var ansh46 = {
    content: '<a href="http://ansh46.com/" target="_blank"><h2 class="content">ANSH46</h2></a><h3 class="content">Rotterdam, Netherlands</h3>',
    latlong: {lat: 51.919262, lng: 4.474245},
  };
  var ansh46Marker = new google.maps.Marker({
    position: ansh46.latlong,
    map: map
  });
  var ansh46InfoWindow = new google.maps.InfoWindow({
    content: ansh46.content,
  });
  ansh46Marker.addListener('click', function() {
    ansh46InfoWindow.open(map, ansh46Marker);
  });



  var a_ma_maniere = {
    content: '<a href="http://www.a-ma-maniere.com/" target="_blank"><h2 class="content">A Ma Maniere</h2></a><h3 class="content">Atlanta, GA, USA</h3>',
    latlong: {lat: 33.778902, lng: -84.408111},
  };
  var a_ma_maniereMarker = new google.maps.Marker({
    position: a_ma_maniere.latlong,
    map: map
  });
  var a_ma_maniereInfoWindow = new google.maps.InfoWindow({
    content: a_ma_maniere.content,
  });
  a_ma_maniereMarker.addListener('click', function() {
    a_ma_maniereInfoWindow.open(map, a_ma_maniereMarker);
  });



  var km20 = {
    content: '<a href="http://en.km20.ru/" target="_blank"><h2 class="content">km20</h2></a><h3 class="content">Moscow, Russia</h3>',
    latlong: {lat: 55.762010, lng: 37.624326},
  };
  var km20Marker = new google.maps.Marker({
    position: km20.latlong,
    map: map
  });
  var km20InfoWindow = new google.maps.InfoWindow({
    content: km20.content,
  });
  km20Marker.addListener('click', function() {
    km20InfoWindow.open(map, km20Marker);
  });



  var luisa_via_roma = {
    content: '<a href="http://www.luisaviaroma.com/" target="_blank"><h2 class="content">Luisa Via Roma</h2></a><h3 class="content">Firenze, Italia</h3>',
    latlong: {lat: 43.772477, lng: 11.254651},
  };
  var luisa_via_romaMarker = new google.maps.Marker({
    position: luisa_via_roma.latlong,
    map: map
  });
  var luisa_via_romaInfoWindow = new google.maps.InfoWindow({
    content: luisa_via_roma.content,
  });
  luisa_via_romaMarker.addListener('click', function() {
    luisa_via_romaInfoWindow.open(map, luisa_via_romaMarker);
  });



  var hypebeast = {
    content: '<a href="http://hbx.com/" target="_blank"><h2 class="content">Hypebeast</h2></a><h3 class="content">New York, NY, USA</h3>',
    latlong: {lat: 40.720422, lng: -74.001735},
  };
  var hypebeastMarker = new google.maps.Marker({
    position: hypebeast.latlong,
    map: map
  });
  var hypebeastInfoWindow = new google.maps.InfoWindow({
    content: hypebeast.content,
  });
  hypebeastMarker.addListener('click', function() {
    hypebeastInfoWindow.open(map, hypebeastMarker);
  });


  var lessons = {
    content: '<a href="http://www.lessonsconceptstore.com/" target="_blank"><h2 class="content">Lessons</h2></a><h3 class="content">Perth, WA, Australia</h3>',
    latlong: {lat: -31.950630, lng: 115.856023},
  };
  var lessonsMarker = new google.maps.Marker({
    position: lessons.latlong,
    map: map
  });
  var lessonsInfoWindow = new google.maps.InfoWindow({
    content: lessons.content,
  });
  lessonsMarker.addListener('click', function() {
    lessonsInfoWindow.open(map, lessonsMarker);
  });



  var the_factory = {
    content: '<a href="https://www.thefactoryokc.com/" target="_blank"><h2 class="content">The Factory</h2></a><h3 class="content">Oklahoma City, OK, USA</h3>',
    latlong: {lat: 35.478364, lng: -97.513614},
  };
  var the_factoryMarker = new google.maps.Marker({
    position: the_factory.latlong,
    map: map
  });
  var the_factoryInfoWindow = new google.maps.InfoWindow({
    content: the_factory.content,
  });
  the_factoryMarker.addListener('click', function() {
    the_factoryInfoWindow.open(map, the_factoryMarker);
  });




  var feature = {
    content: '<a href="https://www.featuresneakerboutique.com/" target="_blank"><h2 class="content">Feature</h2></a><h3 class="content">Las Vegas, NV, USA</h3>',
    latlong: {lat: 36.126128, lng: -115.188850},
  };
  var featureMarker = new google.maps.Marker({
    position: feature.latlong,
    map: map
  });
  var featureInfoWindow = new google.maps.InfoWindow({
    content: feature.content,
  });
  featureMarker.addListener('click', function() {
    featureInfoWindow.open(map, featureMarker);
  });



  var stone_soup = {
    content: '<a href="http://www.stonesoup.io/" target="_blank"><h2 class="content">Stone Soup</h2></a><h3 class="content">Athina, Greece</h3>',
    latlong: {lat: 37.983193, lng: 23.733610},
  };
  var stone_soupMarker = new google.maps.Marker({
    position: stone_soup.latlong,
    map: map
  });
  var stone_soupInfoWindow = new google.maps.InfoWindow({
    content: stone_soup.content,
  });
  stone_soupMarker.addListener('click', function() {
    stone_soupInfoWindow.open(map, stone_soupMarker);
  });




  var flat_hat_club = {
    content: '<a href="https://www.theflathatclub.com/" target="_blank"><h2 class="content">Flat Hat Club</h2></a><h3 class="content">Akron, OH, USA</h3>',
    latlong: {lat: 41.072991, lng: -81.512729},
  };
  var flat_hat_clubMarker = new google.maps.Marker({
    position: flat_hat_club.latlong,
    map: map
  });
  var flat_hat_clubInfoWindow = new google.maps.InfoWindow({
    content: flat_hat_club.content,
  });
  flat_hat_clubMarker.addListener('click', function() {
    flat_hat_clubInfoWindow.open(map, flat_hat_clubMarker);
  });




  var addicted = {
    content: '<a href="http://www.addicted.kr/" target="_blank"><h2 class="content">Addicted</h2></a><h3 class="content">Seoul, South Korea</h3>',
    latlong: {lat: 37.525826, lng: 127.037819},
  };
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
