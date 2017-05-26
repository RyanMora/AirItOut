import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToPlaceShow = this.navigateToPlaceShow.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const placeId = parseInt(this.props.match.params.placeId);
    const review = Object.assign({}, this.state, {
      place_id: placeId
    });
    this.props.createReview({review});
    this.navigateToPlaceShow();
  }

  update(property){
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Rating</label>
          <br/>
          <input
            type="number"
            value={this.update("rating")}
            />
          <br/>
          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
            />
          <br/>
          <input type="submit" />
        </form>
        <button onClick={this.navigateToPlaceShow}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
