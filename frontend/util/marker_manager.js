import { values } from 'lodash';

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(places) {
    const placesObj = {};
    let placesArr = values(places)
    placesArr.forEach(place => placesObj[place.id] = place);

    placesArr
      .filter(place => !this.markers[place.id])
      .forEach(newPlace => this.createMarkerFromPlace(newPlace));
  }

  createMarkerFromPlace(place){
    const position = new google.maps.LatLng(place.lat, place.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      animation: google.maps.Animation.DROP,
      placeId: place.id
    });

    this.markers[marker.placeId] = marker;
  }
}
