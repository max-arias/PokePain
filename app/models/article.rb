class Article < ApplicationRecord
  attr_accessor :abbr_date

  def abbr_date
    self.abbr_date = date_of_news.strftime("%b. %d")
  end
end