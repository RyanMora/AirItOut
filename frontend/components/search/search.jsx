import React from 'react';

import FilterForm from './filter_form';
import PlaceIndex from './place_index';
import PlaceMap from './../place_map/place_map';

const Search = ({ places, updateFilter }) => (
  <div>
    <div>
      <h5>Click Map to Add Place!</h5>
      <PlaceMap
        places={places}
        updateFilter={updateFilter}
        singlePlace={false}
      />
    </div>
    <div>
      <FilterForm updateFilter={updateFilter}/>
      <PlaceIndex places={places} />
    </div>
  </div>
);

export default Search;
