# == Schema Information
#
# Table name: categories
#
#  id            :integer          not null, primary key
#  category_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Category < ApplicationRecord

  validates :category_type, presence: true;

  has_many :tags

  has_many :places,
    through: :tags,
    source: :place
    
end
