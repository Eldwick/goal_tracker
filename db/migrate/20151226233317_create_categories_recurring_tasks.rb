class CreateCategoriesRecurringTasks < ActiveRecord::Migration
  def change
    create_table :categories_recurring_tasks, id: false do |t|
      t.integer :recurring_task_id
      t.integer :category_id
    end

    add_index :categories_recurring_tasks, :recurring_task_id
    add_index :categories_recurring_tasks, :category_id
  end
end
