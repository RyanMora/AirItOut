export const fetchPlace = id => {
  return $.ajax({
    method: "GET",
    url: `api/places/${id}`
  });
};

export const fetchPlaces = (params) => {
  return $.ajax({
    method: "GET",
    url: "api/places",
    data: params
  });
};
