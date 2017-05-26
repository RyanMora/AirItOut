/* global google:false */

class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(places){
    const placesObj = {};
    places.forEach(place => placesObj[place.id] = [place]);

    places
      .filter(place => !this.markers[place.id])
      .forEach(newPlace => this.createMarkerFromPlace(newPlace, this.handleClick))

    Object.keys(this.markers)
      .filter(placeId => !placesObj[placeId])
      .forEach((placeId) => this.removeMarker(this.markers[placeId]))
  }

  createMarkerFromPlace(place) {
    const position = new google.maps.LatLng(place.lat, place.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      placeId: place.id
    });

    marker.addListener('click', () => this.handleClick(place));
    this.markers[marker.placeId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.placeId].setMap(null);
    delete this.markers[marker.placeId];
  }
}

export default MarkerManager;
