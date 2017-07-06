# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  place_id    :integer          not null
#  user_id     :integer          not null
#  review_text :text             not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  photo_url   :string
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
