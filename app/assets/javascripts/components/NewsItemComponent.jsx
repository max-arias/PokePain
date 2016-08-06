var NewsItemComponent = React.createClass({
  getInitialState: function() {
    return { item: this.props.newsItem };
  },
  getDateDay: function(day) {
    switch (day) {
      case 1:
        return day + 'st';
      case 2:
        return day + 'nd';
      case 3:
        return day + 'rd';
      default:
        return day ? (day + 'th') : 'N/A';
    }
  },
  render: function() {
    return (
      <div className="row article-row">
        <div className="left">
          <div className="date">
            <h3 className="month">{this.state.item.abbr_date_month}</h3>
            <h3 className="day">{this.getDateDay(this.state.item.abbr_date_day)}</h3>
          </div>
        </div>
        <div className="right">
          <h3>
            <a href={this.state.item.url} target="_blank">{this.state.item.description}</a>
          </h3>
          <p>{this.state.item.summary}</p>
        </div>
      </div>
    );
  }
});
