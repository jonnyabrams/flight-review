class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :content
      t.integer :score
      t.belongs_to :airline, null: false, foreign_key: true

      t.timestamps
    end
  end
end
