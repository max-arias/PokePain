var GoogleMapComponent = React.createClass({
  map: null,
  componentDidMount() {
    this.map = this.createMap();
    var self = this;

    $.ajax({
      type: 'GET',
      url: '/locationData'
    })
    .done(function(data) {
      self.addLabels(data)
    })


    window.google.maps.event.addDomListener(window, "resize", function() {
      if(this.map) {
        var center = this.map.getCenter();
        google.maps.event.trigger(this.map, "resize");
        this.map.setCenter(center);
      }
    });

  },
  createMap() {
    return new window.google.maps.Map(this.refs.google_map_container, {
      center: {lat: 39, lng: -95},
      zoom: 4
    })
  },
  addLabels(data) {
    var images = ['/assets/icons/1.png', '/assets/icons/2.png', '/assets/icons/3.png'];
    for(var i = 0; i < data.length; i++) {
      var item = data[i];
      if(item.location) {
        item.locParts = item.location.split(",");

        (function(item, images, self){
          var contentStr = self.contentString(item);

          var infowindow = new window.google.maps.InfoWindow({
            content: contentStr
          });

          var image = images[Math.floor(Math.random()*images.length)];
          var newMarker = new window.google.maps.Marker({
            position: {lat: Number(item.locParts[0]), lng: Number(item.locParts[1])},
            map: self.map,
            icon: image
          });

          newMarker.addListener('click', function() {
            infowindow.open(self.map, newMarker);
          });
        })(item, images, this);

      }
    }
  },
  contentString(item) {
    var str = "<div><h3>"+item.description+"</h3><p>"+item.summary+"</p><p>Via: <a target='_blank' href='"+item.url+"'>"+item.url+"</a></div>";
    return str;
  },
  render: function() {
    return (
    <div className="map_container">
      <div ref="google_map_container" className="map_canvas"></div>
    </div>
    );
  }
});
