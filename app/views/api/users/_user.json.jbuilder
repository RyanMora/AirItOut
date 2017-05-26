json.extract! user, :id, :username
json.favorite_places user.favorite_places.pluck(:id)
