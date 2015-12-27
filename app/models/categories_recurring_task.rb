class CategoriesRecurringTask < ActiveRecord::Base
  belongs_to :category
  belongs_to :recurring_task
end
