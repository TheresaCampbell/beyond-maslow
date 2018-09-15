class CreateListItems < ActiveRecord::Migration[5.2]
  def change
    create_table :list_items do |t|
      t.string :title
      t.text :body
      t.string :cost
      t.string :category
      t.boolean :completed

      t.timestamps
    end
  end
end
