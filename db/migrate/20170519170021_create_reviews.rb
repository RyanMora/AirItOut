class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :place_id, null: false
      t.integer :user_id, null: false
      t.text :review_text, null: false
      t.integer :rating, null: false
      t.integer :price, null: false
      t.string :photo_url, null: false
      t.timestamps
    end

    add_index :reviews, :place_id
    add_index :reviews, :user_id
  end
end
