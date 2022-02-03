exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        { id: 11, user_name: 'Deepti', user_password: 'Movie123' }
      ])
    })
}
