class CreateRecurringTasks < ActiveRecord::Migration
  def change
    create_table :recurring_tasks do |t|
      t.text :name
      t.text :frequency

      t.timestamps null: false
    end
  end
end
