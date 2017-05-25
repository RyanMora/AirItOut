class Place < ApplicationRecord
  validates :description, :lat, :lng, :type_of_business, presence: true
end
