class AddArticleDate < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :date_of_news, :datetime
  end
end
