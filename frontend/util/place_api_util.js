export const fetchPlaces = data => (
  $.ajax({
    method: 'GET',
    url: 'api/places',
    data
  })
);

export const fetchPlace = id => (
  $.ajax({
    method: 'GET',
    url: `api/places/${id}`
  })
);

export const createPlace = data => (
  $.ajax({
    method: 'POST',
    url: 'api/places',
    data
  })
);
