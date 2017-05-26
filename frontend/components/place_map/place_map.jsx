import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class PlaceMap extends React.Component {
  componentDidMount(){
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    const map = this.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render(){
    return (
      <div ref={ map=> this.mapNode = map}>OH HIIIIII</div>
    )
  }
}

export default withRouter(PlaceMap);
