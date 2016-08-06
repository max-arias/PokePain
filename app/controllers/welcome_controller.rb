class WelcomeController < ApplicationController
  def index
    # return the articles container React component
    render component: 'ArticlesContainer'
  end
end
