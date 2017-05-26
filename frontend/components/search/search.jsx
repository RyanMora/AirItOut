import React from 'react';

import PlaceIndex from './place_index';
import PlaceMap from '../place_map/place_map';

const Search = ({places}) => (
  <div>
    <div>
      <h5>Click Map to Add Place!</h5>
      <PlaceMap
        places={places}
        singlePlace={false}
        />
    </div>
    <PlaceIndex places={places}/>
  </div>
);

export default Search;
