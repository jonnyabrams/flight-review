Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  # route requests for none-existent paths back to the index path
  # so when we use react router, this allows handling routing to react components without interfering with rails routes
  # basically what this means is it lets the client-side routing take over
  get '*path', to: 'pages#index', via: :all
end
