exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        { auth0_id: 11, user_name: 'Kajal', user_email: 'deepti.khanolkar@hotmail.com' }
      ])
    })
}
