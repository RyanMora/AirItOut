import React from 'react';
import { Link } from 'react-router-dom';

import PlaceDetail from './place_detail';
import PlaceMap from '../place_map/place_map';
import { ProtectedRoute } from '../../util/link_util';

const PlaceShow = ({place, placeId, fetchPlace}) => {
  const places = {
    [placeId]: place
  };

  return (
    <div>
      <div>
        <Link to="/">Back to Places Index</Link>
        <PlaceMap
          places={places}
          placeId={placeId}
          singlePlace={true}
          fetchPlace={fetchPlace}
          />
      </div>
      <div>
        <PlaceDetail place={place}/>
        Placeholder for reviews
      </div>
    </div>
  );
};

export default PlaceShow;
