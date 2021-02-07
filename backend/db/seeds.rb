# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.delete_all
Comment.delete_all
# post seeds
post1 = Post.create(content: "Hello, this is a post.")
post2 = Post.create(content: "Hello, this is a second post.")

# comment seeds
comment1 = Comment.create(content: "Hello, this is a comment.", post_id: post1.id)
comment2 = Comment.create(content: "Hello, this is a second comment.", post_id: post2.id)