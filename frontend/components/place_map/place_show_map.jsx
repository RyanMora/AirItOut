import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { values } from 'lodash';

class PlaceShowMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    const {lat, lng} = nextProps.place;
    let location = {lat, lng};
    const mapOptions = {
      center: location,
      zoom: 15
    };

    this.map = new google.maps.Map(this.refs.mapShow, mapOptions);
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      animation: google.maps.Animation.DROP
    });

    let place = nextProps.place;

    let content = "<div id='mapWindow'>" +
      `<h1>${place.name}</h1>` +
      `<h2>${place.address}, ${place.city}, ${place.state}, ${place.zip}</h2>` +
      "</div>";

    const window = new google.maps.InfoWindow({
      content: content,
      maxWidth: 200
    });

    marker.addListener('mouseover', () => {
      window.open(this.map, marker);
    });

    marker.addListener('mouseout', () => {
      window.close(this.map, marker);
    });
  }

  render() {
    return(
      <div id="mapShow-container" ref="mapShow"></div>
    );
  }
}

export default PlaceShowMap;
