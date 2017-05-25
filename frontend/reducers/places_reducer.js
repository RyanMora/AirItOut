import merge from 'lodash/merge';

import {
  RECEIVE_PLACE,
  RECEIVE_PLACES,
} from '../actions/place_actions';

const PlacesReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_PLACES:
      return action.places;
    case RECEIVE_PLACE:
      const newPlace = {[action.place.id]: action.place};
      return merge({}, state, newPlace);
    default:
      return state;
  }
};

export default PlacesReducer;
