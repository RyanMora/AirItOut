import React from 'react';
import Rating from 'react-rating';
import ErrorsContainer from '../errors/errors_container';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review_text: "",
      rating: 0,
      photo_url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.upload = this.upload.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  updateRating(rate) {
    this.setState({rating: rate});
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (err, results) => {
        if(!err) {
          this.setState({photo_url: results[0].secure_url});
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let place_id = this.props.place.id;
    let user_id = this.props.currentUser.id;
    let { review_text, rating, photo_url } = this.state;

    const newReview = {
      place_id,
      user_id,
      review_text,
      rating,
      photo_url
    };

    this.props.createReview(newReview)
      .then(() => this.props.closeModal());
    this.setState({review_text:"", rating:0, photo_url:""});
  }

  render() {
    return(
      <form id="reviewForm" onSubmit={this.handleSubmit}>
        <div id="rating">
          <label id="imageLabels">Select your rating</label>
          <Rating
            empty="fa fa-star-o fa-2x"
            full="fa fa-star fa-2x"
            initialRate={this.state.rating}
            stop={5}
            onChange={this.updateRating}
          />
        </div>

        <div id="reviewThoughts">
          <label id="imageLabels">Your Review</label>
          <textarea
            cols="30"
            rows="10"
            placeholder="Your review helps others learn about
            great local places."
            value={this.state.review_text}
            onChange={this.update("review_text")}
            />
        </div>

        <label id="imageIcon">Upload an image</label>
        <label id="imageIcon">(optional, max 1)</label>
        <button id="imageUpload" onClick={this.upload}>
          <i className="fa fa-cloud-upload" aria-hidden="true"></i>
        </button>

        <div id="reviewErrors">
          <ErrorsContainer />
        </div>
          <input type="submit" value="Post Review"/>
      </form>
    );
  }
}

export default ReviewForm;
