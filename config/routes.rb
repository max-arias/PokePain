Rails.application.routes.draw do
  resources :articles
  get    '/locationData', to: 'articles#locationData'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  get    '/logout',  to: 'sessions#destroy'
  delete '/logout',  to: 'sessions#destroy'
  root 'welcome#index'
end
