# == Schema Information
#
# Table name: tags
#
#  id          :integer          not null, primary key
#  place_id    :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Tag < ApplicationRecord

  validates :category_id, :place_id, presence: true

  belongs_to :place
  belongs_to :category
  
end
