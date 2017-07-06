# == Schema Information
#
# Table name: places
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zip          :string           not null
#  price        :integer          not null
#  image_url    :string           not null
#  lat          :float            not null
#  lng          :float            not null
#  phone_number :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Place < ApplicationRecord

  validates :name, :address, :city, :state, :zip, :price, :image_url,
            :lat, :lng, presence: true
  validates :name, uniqueness: true
  validates :price, inclusion: { in: [1, 2, 3, 4] }

  has_many :reviews
  has_many :tags

  has_many :categories,
    through: :tags,
    source: :category

  def self.search(query, places)
    processed_query = "%" + query.split.join("%") + "%"
    places.where("name ILIKE :query", query: processed_query)
  end
  
end
