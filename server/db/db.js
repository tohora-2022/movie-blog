const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBlogs
}

function getBlogs (db = connection) {
  return db('blogs').select()
}
