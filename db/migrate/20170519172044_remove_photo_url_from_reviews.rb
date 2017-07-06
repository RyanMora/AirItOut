class RemovePhotoUrlFromReviews < ActiveRecord::Migration[5.0]
  def change
    remove_column :reviews, :photo_url, :string
  end
end
