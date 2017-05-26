import { combineReducers } from 'redux';

import PlacesReducer from './places_reducer';
import FiltersReducer from './filters_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  places: PlacesReducer,
  filters: FiltersReducer,
  session: SessionReducer
});

export default RootReducer;
