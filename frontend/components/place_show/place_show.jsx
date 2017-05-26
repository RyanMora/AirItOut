import React from 'react';
import { Link } from 'react-router-dom';

import PlaceDetail from './place_detail';
import PlaceMap from '../place_map/place_map';
import ReviewFormContainer from './review_form_container';
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';

const PlaceShow = ({ place, placeId, fetchPlace }) => {
  const places = {
    [placeId]: place
  };

  return(
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
        <PlaceDetail place={place} />
        <ReviewLink
          component={ReviewFormContainer}
          to={`/places/${placeId}/review`}
          label="Leave a Review"
        />
        <ProtectedRoute
          path="/places/:placeId/review"
          component={ReviewFormContainer}
        />
      </div>
    </div>
  );
};

export default PlaceShow;
