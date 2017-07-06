import * as ReviewUtil from '../util/review_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const fetchReviews = placeId => dispatch => (
  ReviewUtil.fetchReviews(placeId).then(reviews => (
    dispatch(receiveReviews(reviews))
  ))
);

export const createReview = review => dispatch => {
  return ReviewUtil.postReview(review).then(data => {
    dispatch(receiveReview(data));
  }, err => (
    dispatch(receiveRatingErrors(err.responseJSON))
  ));
};

export const deleteReview = review => dispatch => (
  ReviewUtil.deleteReview(review).then(data => (
    dispatch(removeReview(data))
  ))
);


export const RECEIVE_RATING_ERRORS = 'RECEIVE_RATING_ERRORS';

export const receiveRatingErrors = errors => ({
  type: RECEIVE_RATING_ERRORS,
  errors
});
