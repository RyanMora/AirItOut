import React from 'react';
import { Link } from 'react-router';

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
        <div>placeholder for reviews</div>
      </div>
    </div>
  );
};

export default PlaceDetail;
