import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PlacesReducer from './places_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  places: PlacesReducer
});

export default RootReducer;
