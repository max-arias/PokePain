class ArticlesController < ApplicationController
  before_action :logged_in_user

  def index
    @articles = Article.all
  end

  def new
    @article = Article.new
  end

  def show
    @article ||= Article.find(params[:id])
  end

  def create
    @article = Article.create(article_params)

    if @article.save
      redirect_to "/articles/#{@article.id}", :notice => "Article saved!"
    else
      render "new"
    end
  end

  def edit
    @article = Article.find params[:id]
  end

  def update
    @article = Article.find params[:id]
    if @article.update_attributes params[:post]
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

  private

  def article_params
    params.require(:article).permit(:description, :url, :video_embed, :location)
  end
end
