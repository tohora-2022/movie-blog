exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('user_name')
    table.string('user_password')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
