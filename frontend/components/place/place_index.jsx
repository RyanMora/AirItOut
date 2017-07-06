import React from 'react';

import PlaceIndexItem from './place_index_item';
import HeaderContainer from '../header/header_container';
import Loading from '../loading';
import Filters from './filters';

const PRICES = { 1:'$', 2:'$$', 3:'$$$', 4:'$$$$'};

class PlaceIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let places = Object.values(this.props.places);
    return(
      <div id="mapPage">
        <HeaderContainer {...this.props} />
        <div id="places">
          <Filters {...this.props} />
          {places.map(place => (
            <PlaceIndexItem
              place={place}
              key={place.id}
              history = {this.props.history}
              />
          ))}
        </div>

      </div>
    );
  }
}


export default PlaceIndex;
