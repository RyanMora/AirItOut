import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { values } from 'lodash';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.457},
  zoom: 13
};

class PlaceMap extends React.Component{
  componentDidMount() {
    this.renderMarkers();

    this.showPlace = this.showPlace.bind(this);
    this.renderMarkers = this.renderMarkers.bind(this);
  }

  componentDidUpdate() {
    this.renderMarkers();
    this.MarkerManager.updateMarkers(this.props.places);

    const placeIds = Object.keys(this.props.places);
    const markers = values(this.MarkerManager.markers);

    markers.forEach(marker => {
      this.showPlace(marker);
    });
  }

  renderMarkers() {
    this.map = new google.maps.Map(this.refs.map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.places);
  }

  showPlace(marker) {
    let placeId = marker.placeId;
    let placeItem = this.props.places[placeId];

    let content = "<div id='mapWindow'>" +
      `<h1>${placeItem.name}</h1>` +
      `<h2>${placeItem.address}, ${placeItem.city}, ${placeItem.state}, ${placeItem.zip}</h2>` +
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

    let mapDiv = document.getElementById(placeId);

    google.maps.event.addDomListener(mapDiv, 'mouseover', () => {
      window.open(this.map, marker);
    });

    google.maps.event.addDomListener(mapDiv, 'mouseout', () => {
      window.close(this.map, marker);
    });
  }

  render() {
    return(
      <div id="map-container" ref="map"></div>
    );
  }
}

export default PlaceMap;
