exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(() => {
      // Inserts seed entries
      return knex('blogs').insert([
        { id: 1, user_id: 11, movie_title: 'Airlift', movie_review: 'Nice movie', star_rating: 5 },
        { id: 2, user_id: 11, movie_title: 'Panipat', movie_review: 'Best war movie', star_rating: 5 },
        { id: 3, user_id: 11, movie_title: 'Zindagi na milegi dobara', movie_review: 'Good movie on friendship', star_rating: 5 }
      ])
    })
}
