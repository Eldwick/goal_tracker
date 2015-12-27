class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.text :message
      t.integer :recurring_task_id

      t.timestamps null: false
    end

    add_index :tasks, :recurring_task_id
  end
end
