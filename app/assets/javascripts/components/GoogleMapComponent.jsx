var GoogleMapComponent = React.createClass({
  map: null,
  componentDidMount() {
    map = this.createMap();
  },
  createMap() {
    return new window.google.maps.Map(this.refs.google_map_container, {
      center: {lat: 39, lng: -95},
      zoom: 4
    })
  },
  render: function() {
    return (
    <div className="map_container">
      <div ref="google_map_container" className="map_canvas"></div>
    </div>
    );
  }
});
