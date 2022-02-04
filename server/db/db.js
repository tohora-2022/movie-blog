const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBlogs,
  addBlog
}

function getBlogs (db = connection) {
  return db('blogs').select()
}

function addBlog (blog, db = connection) {
  return db('blogs')
    .insert({ movie_title: blog.movieTitle, movie_review: blog.movieReview, star_rating: blog.starRating })
}
