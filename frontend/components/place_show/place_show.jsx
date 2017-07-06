import React from 'react';

import HeaderContainer from '../header/header_container';
import PlaceShowMap from '../place_map/place_show_map';
import ReviewIndexContainer from '../reviews/review_index_container';

const PRICES = { 1:"$", 2:"$$", 3:"$$$", 4:"$$$$"};

class PlaceShow extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let {placeId} = this.props;
    this.props.fetchPlace(placeId);
    this.props.fetchReviews(placeId);
  }

  render() {
    let {
      name, address, city, state,
      zip, price, phone_number} = this.props.place;
    let reviews = this.props.reviews;

    if (this.props.place === undefined) {
        return <h1>loading</h1>;
    } else {
      return (
        <div id="placeShow">
          <HeaderContainer {...this.props} />
          <PlaceShowMap place={this.props.place} />
          <ul id="placeShowInfo">
            <li id="placeShowName">{name}</li>
            <li id="placeInfo">{address}, {city}, {state}, {zip}</li>
            <li id="placeInfo">{reviews.length} Reviews || {PRICES[price]}</li>
            <li id="placeInfo">{phone_number}</li>
          </ul>

          <ReviewIndexContainer {...this.props}/>
        </div>
      );
    }
  }
}

export default PlaceShow;
