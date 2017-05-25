class CreatePlaces < ActiveRecord::Migration[5.0]
  def change
    create_table :places do |t|
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :type_of_business, null: false
      t.string :description, null: false
      t.timestamps
    end
  end
end
