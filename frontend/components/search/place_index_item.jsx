import React from 'react';
import { withRouter } from 'react-router-dom';

import PlaceShowContainer from '../place_show/place_show_container';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const placeId = this.props.place.id;
    this.props.history.push(`/places/${placeId}`);
  }

  render(){
    const {description, picture_url} = this.props.place;
    return (
      <div onClick = {this.handleClick}>
        <div>
          <span>Description</span>
          <span>{description}</span>
        </div>
        <img src={picture_url}/>
      </div>
    );
  }
}

export default withRouter(IndexItem);
