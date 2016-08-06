var ArticlesContainer = React.createClass({
  getInitialState: function() {
    return { locationData: null };
  },
  componentDidMount() {
    $.get('/locationData').done(function(data) {
      this.setState({locationData: data});
    }.bind(this));
  },
  render: function() {

    if (this.state.locationData) {
      var articleItemComponents = this.state.locationData.map(function(item, index) {
          return <NewsItemComponent key={index} newsItem={item}></NewsItemComponent>;
      });
      return (
        <div>
          <div className="title">
            <img src="/assets/pokepain.png" height="80"></img>
          </div>
          <div className="content">
            <hr></hr>
            <div className="articles_container">
              <div className="gmaps-row">
                <GoogleMapComponent locationData={this.state.locationData}></GoogleMapComponent>
              </div>
              <hr></hr>
              {articleItemComponents}
            </div>
          </div>
        </div>
      );
    }

    return(
        <div>
          <div className="title">
            <img src="/assets/pokepain.png" height="80"></img>
          </div>
          <div className="content">
            <hr></hr>
            <div className="loading">
              <h3>Loading...</h3>
              <img src="/assets/loading.gif"></img>
            </div>
          </div>
      </div>
    );
  }
});
