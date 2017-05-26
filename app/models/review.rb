class Review < ActiveRecord::Base
  validates :rating, inclusion: { in: (1..5) }
  validates :place, presence: true
  belongs_to :place
end
