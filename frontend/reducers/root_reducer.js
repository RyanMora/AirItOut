import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import PlacesReducer from './places_reducer';
import PlaceReducer from './place_reducer';
import ReviewsReducer from './reviews_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  places: PlacesReducer,
  place: PlaceReducer,
  reviews: ReviewsReducer,
  errors: ErrorsReducer
});

export default rootReducer;
