Rails.application.routes.draw do
  devise_scope :user do
    post 'users' => 'registrations#create'
  end

  devise_for :users

  root 'launch#root'

  get 'dashboard' => 'dashboard#index', as: :dashboard_path

  resources :categories
  resources :recurring_tasks
  resources :tasks

end
