import * as APIUtil from '../util/place_api_util';

export const RECEIVE_PLACES = 'RECEIVE_PLACES';
export const RECEIVE_PLACE = 'RECEIVE_PLACE';

export const receivePlaces = places => ({
  type: RECEIVE_PLACES,
  places
});

export const receivePlace = place => ({
  type: RECEIVE_PLACE,
  place
});

export const fetchPlaces = filters => dispatch => (
  APIUtil.fetchPlaces(filters).then(places => (
    dispatch(receivePlaces(places))
  ))
);

export const fetchPlace = id => dispatch (
  APIUtil.fetchPlace(id).then(place => (
    dispatch(receivePlace(place))
  ))
);

export const createPlace = place => dispatch => (
  APIUtil.createPlace(place).then(place => (
    dispatch(receivePlace(place))
  ))
);