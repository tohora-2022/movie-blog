exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('auth0_id').primary()
    table.string('user_name')
    table.string('user_email')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
