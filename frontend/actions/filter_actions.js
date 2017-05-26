import { fetchPlaces } from './place_actions';

export const UPDATE_FILTER = 'UPATE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchPlaces(getState().filters)(dispatch);
};
