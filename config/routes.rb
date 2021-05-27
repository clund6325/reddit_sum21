Rails.application.routes.draw do
  # Route - allows us to communicate through the browser into the application
  # rails commands, http verb, url, endpoint
  # resources - generate all necessary routes for main actions
    # resources :controller
  # root - onces , this will define the root page, starting page
    # root 'controller#action'
  # long way, defining own routes
    # http verb, url, endpoint, rails command
   # get 'people/new', to: 'people#index'
   # post
  root 'subs#index'

  resources :subs do
    resources :topics
  end

  resources :topics do
    resources :comments
  end
end
