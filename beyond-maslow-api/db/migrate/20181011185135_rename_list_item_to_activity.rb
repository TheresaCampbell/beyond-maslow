class RenameListItemToActivity < ActiveRecord::Migration[5.2]
  def change
    rename_table :list_items, :activities
  end
end
