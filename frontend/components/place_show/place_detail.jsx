import React from 'react';
import { Link } from 'react-router';

import ReviewShow from './review_show';

const reviewList = (reviews = []) => (
  reviews.map(review => (
    <ReviewShow
      rating={review.rating}
      body={review.body}
      key={review.id}
    />
  ))
);

const PlaceDetail = ({place}) => {
  return (
    <div>
      <ul>
        <img src={place.picture_url}/>
        <li>Rating: {place.average_rating || 'No reviews yet'}</li>
        <li>Description: {place.description}</li>
        <li>Latitude: {place.lat}</li>
        <li>Longitude: {place.lng}</li>
      </ul>
      <br/>
      <div>
        <h3>Reviews</h3>
        {reviewList(place.reviews)}
      </div>
    </div>
  );
};

export default PlaceDetail;
