class Article < ApplicationRecord
  attr_accessor :abbr_date

  def abbr_date
    self.abbr_date = date_of_news.strftime("%b. %d").strip if date_of_news
  end

  def abbr_date_month
    self.abbr_date = date_of_news.strftime("%b.").strip if date_of_news
  end

  def abbr_date_day
    self.abbr_date = date_of_news.strftime("%e").strip if date_of_news
  end

  # To return abbr_date in as json
  def as_json options=nil
    options ||= {}
    options[:methods] = ((options[:methods] || []) + [:abbr_date, :abbr_date_month, :abbr_date_day])
    super options
  end
end
