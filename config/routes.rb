Rails.application.routes.draw do
  get    '/locationData', to: 'articles#locationData'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  resources :articles

  root 'welcome#index'
end
