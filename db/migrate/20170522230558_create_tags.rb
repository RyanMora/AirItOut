class CreateTags < ActiveRecord::Migration[5.0]
  def change
    create_table :tags do |t|
      t.integer :place_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end

    add_index :tags, :place_id
    add_index :tags, :category_id
  end
end
