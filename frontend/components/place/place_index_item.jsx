import React from 'react';
import { Link } from 'react-router-dom';

const PRICES = { 1:"$", 2:"$$", 3:"$$$", 4:"$$$$"};

class PlaceIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlaceClick = this.handlePlaceClick.bind(this);
  }

  handlePlaceClick(e) {
    e.preventDefault();
    let placeId = this.props.place.id;
    this.props.history.push(`/places/${placeId}`);
  }

  render() {
    const { id, name, price, address, image_url,
          state, city, zip, reviews } = this.props.place;
    return (
      <div id={id}>
        <ul id="place" onClick= {this.handlePlaceClick}>
          <li>{name}</li>
          <li>{address}, {city}, {state}, {zip}</li>
          <li>{PRICES[price]}</li>
          <img src={image_url}></img>
        </ul>
      </div>
    );
  }
}

export default PlaceIndexItem;
