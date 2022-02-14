import request from 'superagent'

const blogUrl = '/api/v1/blogs/'

export function getBlogs () {
  return request
    .get(blogUrl)
    .then(response => response.body)
}

export function getMovieRequest (searchValue) {
  const apiUrl = `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.SECRET_KEY}`
  return request
    .get(apiUrl)
    .then(response => response.body)
}

export function saveBlog (formData) {
  return request
    .post(blogUrl)
    .send(formData)
    .then(response => response.body)
}
