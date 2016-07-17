class CreateArticle < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :description
      t.string :url
      t.string :video_embed
      t.string :location
      t.timestamps
    end
  end
end
