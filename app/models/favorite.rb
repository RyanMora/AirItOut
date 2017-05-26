class Favorite < ActiveRecord::Base
	validates :user_id, uniqueness: {scope: :place_id}

	belongs_to :place
	belongs_to :user

end
