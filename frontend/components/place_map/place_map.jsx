import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 13
};

class PlaceMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.singlePlace) {
      this.props.fetchPlace(this.props.placeId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.places);
    }
  }

  componentDidUpdate() {
    if (this.props.singlePlace) {
      const targetPlaceKey = Object.keys(this.props.places)[0];
      const targetPlace = this.props.places[targetPlaceKey];
      this.MarkerManager.updateMarkers([targetPlace]); //grabs only that one place
    } else {
      this.MarkerManager.updateMarkers(this.props.places);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(place) {
    this.props.history.push(`places/${place.id}`);
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: 'places/new',
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  render() {
    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(PlaceMap);
