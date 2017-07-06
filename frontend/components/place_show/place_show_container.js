import { connect } from 'react-redux';

import { fetchPlace } from '../../actions/place_actions';
import { fetchReviews, createReview } from '../../actions/review_actions';
import PlaceShow from './place_show';

const mapStateToProps = (state, { match }) => ({
  place:  state.place,
  placeId: parseInt(match.params.placeId),
  reviews: state.reviews
});

const mapDispatchToProps = dispatch => ({
  fetchPlace: (id) => dispatch(fetchPlace(id)),
  fetchReviews: (placeId) => dispatch(fetchReviews(placeId)),
  createReview: (review) => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceShow);
