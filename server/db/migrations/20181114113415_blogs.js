exports.up = (knex) => {
  return knex.schema.createTable('blogs', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.auth0_id')
    table.string('movie_title')
    table.string('movie_review')
    table.string('star_rating')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('blogs')
}
