import merge from 'lodash/merge';

import {
  CREATE_REVIEW,
  RECEIVE_REVIEW,
  RECEIVE_PLACES,
  RECEIVE_PLACE
} from '../actions/place_actions';

const PlacesReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_PLACES:
      return action.places;
    case RECEIVE_PLACE:
      const newPlace = {[action.place.id]: action.place};
      return merge({}, state, newPlace);
    case RECEIVE_REVIEW:
      const review = action.review;
      newState[review.place_id].reviews.push(review)
      return newState;
    default:
      return state;
  }
};

export default PlacesReducer;
