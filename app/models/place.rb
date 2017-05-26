class Place < ApplicationRecord
  validates :description, :lat, :lng, :type_of_business, presence: true

  # def average_rating
  #   reviews.average(:rating)
  # end
end
