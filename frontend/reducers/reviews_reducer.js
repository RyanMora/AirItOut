import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW }
from "../actions/review_actions";

import merge from 'lodash/merge';

const ReviewsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return [action.review, ...state];
    case REMOVE_REVIEW:
      let newState = state.slice(0);
      let idx = 0;
      newState.forEach((review, i) => {
        if (review.id === action.review.id) {
          idx = i;
        }
      });
      newState.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};

export default ReviewsReducer;
