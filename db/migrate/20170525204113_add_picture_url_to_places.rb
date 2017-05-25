class AddPictureUrlToPlaces < ActiveRecord::Migration[5.0]
  def change
    add_column :places, :picture_url, :string
  end
end
