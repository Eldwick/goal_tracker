class Task < ActiveRecord::Base
  belongs_to :recurring_task, dependent: :destroy
end
