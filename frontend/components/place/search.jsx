import React from 'react';

import PlaceIndex from './place_index';
import PlaceMap from '../place_map/place_map';

const Search = (props) => (
  <div>
    <PlaceIndex {...props}/>
    <PlaceMap {...props}/>
  </div>
);

export default Search;
