exports.up = (knex) => {
  return knex.schema.createTable('blogs', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('movie_title')
    table.string('movie_review')
    table.integer('star_rating')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('blogs')
}
