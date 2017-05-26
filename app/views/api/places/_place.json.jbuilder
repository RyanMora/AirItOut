json.extract! place, :id, :description, :lat, :lng,
  :picture_url, :average_rating

json.reviews do
  json.partial! 'api/reviews/review', collection: place.reviews, as: :review
end
