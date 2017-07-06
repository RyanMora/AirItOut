import { RECEIVE_PLACE } from '../actions/place_actions';

const PlaceReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLACE:
      return action.place;
    default:
      return state;
  }
};

export default PlaceReducer;
