class WelcomeController < ApplicationController
  def index
    @articles = get_articles
  end

  private

  def get_articles
    Article.all.order(date_of_news: :desc)
  end
end
