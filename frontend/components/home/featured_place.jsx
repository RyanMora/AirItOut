import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedPlace extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props);
    let {place} = this.props;
    this.props.history.push(`/places/${place.id}`);
  }

  render() {
    const {place} = this.props;

    return (
      <li className="photoContainer" onClick={this.handleClick} id={place.id}>
        <img id="photo" src={place.image_url} />
      </li>
    );
  }
}

export default FeaturedPlace;
