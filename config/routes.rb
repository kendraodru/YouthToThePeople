Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :products, only: [:index, :show]
    resources :carts, only: [:create, :show]
    resources :cart_items, only: [:create, :index,:destroy]
    # think about this^ do I need a update for my cart items?
    resource :session, only: [:create, :destroy]      
    
  end
end


