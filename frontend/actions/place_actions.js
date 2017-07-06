import * as APIUtil from '../util/place_api_util';

export const RECEIVE_PLACE = "RECEIVE_PLACE";
export const RECEIVE_PLACES = "RECEIVE_PLACES";

export const receivePlace = place => ({
  type: RECEIVE_PLACE,
  place
});

export const receivePlaces = places => ({
  type: RECEIVE_PLACES,
  places
});

export const fetchPlace = id => dispatch => (
  APIUtil.fetchPlace(id).then(place => (
    dispatch(receivePlace(place))
  ))
);

export const fetchPlaces = (params) => dispatch => (
  APIUtil.fetchPlaces(params).then(places => (
    dispatch(receivePlaces(places))
  ))
);
