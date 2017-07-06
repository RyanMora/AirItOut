import React from 'react';
import Rating from 'react-rating';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.review);
  }

  render() {
    const {user, review_text, rating, photo_url} = this.props.review;
    let deleteReview;
    if (this.props.currentUser.id === this.props.review.user.id) {
      deleteReview = <button onClick={this.handleDelete}>
        Remove Review
      </button>;
    } else {
      deleteReview = <p></p>;
    }

    return(
      <div id="reviewItems">
        <ul id="review">
          <Rating
            initialRate={rating}
            empty="fa fa-star-o fa-2x"
            full="fa fa-star fa-2x"
            readonly
            />
          <li id="reviewText">{review_text}</li>
          <li id="username"> - {user.username}</li>
          <img src={photo_url}></img>
          {deleteReview}
        </ul>
      </div>
    );
  }
}

export default ReviewIndexItem;
