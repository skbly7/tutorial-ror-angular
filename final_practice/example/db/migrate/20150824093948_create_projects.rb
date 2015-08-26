class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.text :description
      t.string :owner
      t.boolean :is_public

      t.timestamps null: false
    end
  end
end
