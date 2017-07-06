class CreatePlaces < ActiveRecord::Migration[5.0]
  def change
    create_table :places do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.integer :price, null: false
      t.string :image_url, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :phone_number, null: false
      t.timestamps
    end
  end
end
