class AddPhotoUrlFromReviews < ActiveRecord::Migration[5.0]
  def change
    add_column :reviews, :photo_url, :string
  end
end
