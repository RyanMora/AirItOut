export const selectPlace = ({ places, reviews }, id) => {
  const place = places[id] || {};
  return place
};

export const asArray = ({ places }) => (
  Object.keys(places).map(key => places[key])
);
