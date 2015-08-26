class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.boolean :is_public
      t.string :owner

      t.timestamps null: false
    end
  end
end
