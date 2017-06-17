import React from 'react';
import FeaturedPlace from './featured_place';

class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaces();
  }

  render() {
    let featured = Object.values(this.props.places);
    if (featured.length !== 0) {
      featured = featured.slice(0, 9);
    }

    return (
      <ul id="popularPhotos">
        {featured.map(place =>
          <FeaturedPlace key={place.id} place={place} {...this.props}/>
        )};
      </ul>
    );
  }
}

export default HomeIndex;
