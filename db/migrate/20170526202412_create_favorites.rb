class CreateFavorites < ActiveRecord::Migration[5.0]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :place_id, null: false

      t.timestamps
    end

    add_index :favorites, :user_id
    add_index :favorites, :place_id
    add_index :favorites, [:user_id, :place_id], unique: true
  end
end
