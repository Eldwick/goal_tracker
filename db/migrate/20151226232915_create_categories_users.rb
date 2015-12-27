class CreateCategoriesUsers < ActiveRecord::Migration
  def change
    create_table :categories_users, id: false do |t|
      t.integer :user_id
      t.integer :category_id
    end

    add_index :categories_users, :user_id
    add_index :categories_users, :category_id
  end
end
