class ArticlesController < ApplicationController
  before_action :logged_in_user, except: [:locationData]
  require 'httparty'

  def index
    @articles = Article.all.order(id: :desc)
  end

  def new
    @article = Article.new
  end

  def show
    @article ||= Article.find(params[:id])
  end

  def create
    @article = Article.create(article_params)

    if @article.summary.nil?
      smmry_key = Rails.application.secrets.smmry_key

      smmry_url = "http://api.smmry.com/?SM_API_KEY=#{smmry_key}&SM_URL=#{@article.url}"
      response = HTTParty.get(smmry_url)
      response = response.parsed_response

      @article.summary = response["sm_api_content"] unless response["sm_api_content"].blank?
    end

    if @article.save
      redirect_to articles_path
    else
      render "new"
    end
  end

  def edit
    @article = Article.find params[:id]
  end

  def update
    @article = Article.find params[:id]
    if @article.update_attributes article_params
      redirect_to articles_path
    else
      render :action => :edit
    end
  end

  def destroy
    @article = Article.find params[:id]
    @article.destroy
    redirect_to articles_path
  end

  def locationData
    render json: Article.all.as_json(only: [:description, :location, :date_of_news, :summary, :url])
  end

  private

  def article_params
    params.require(:article).permit(:description, :url, :video_embed, :location, :date_of_news, :summary)
  end
end
