exports.up = (knex) => {
  return knex.schema.createTable('blogs', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('movie_title')
    table.string('movie_review')
    table.integer('movie_stars')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('blogs')
}
