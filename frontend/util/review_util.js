export const fetchReviews = (placeId) => {
  return $.ajax({
    method: "GET",
    url: `/api/places/${placeId}/reviews`
  });
};

export const postReview = review => {
  return $.ajax({
    method: "POST",
    url: `/api/places/${review.place_id}/reviews`,
    data: {review}
  });
};

export const deleteReview = review => {
  return $.ajax({
    method: "DELETE",
    url: `/api/places/${review.place_id}/reviews/${review.id}`
  });
};
