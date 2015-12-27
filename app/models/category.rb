class Category < ActiveRecord::Base
  has_and_belongs_to_many :users
  has_and_belongs_to_many :recurring_tasks

end
