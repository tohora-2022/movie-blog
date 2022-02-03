import React, { useState, useEffect } from 'react'
import { getBlogs, getMovieRequest } from '../api'
// import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from './MovieList'
import MovieListHeading from './MovieListHeading'
import SearchBox from './SearchBox'

function App () {
  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState([])
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const updateSearchValue = (movie) => {
    setSearchValue(movie)
  }

  useEffect(() => {
    setLoading(true)
    getMovieRequest(searchValue)
      .then(movies => {
        if (movies.Search) {
          setMovies(movies.Search)
        }
        return null
      })
      .finally(() => {
        setLoading(false)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [searchValue])

  useEffect(() => {
    setLoading(true)
    getBlogs()
      .then(blogs => {
        setBlogs(blogs)
        return null
      })
      .finally(() => {
        setLoading(false)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  if (loading) return (<p>'loading...'</p>)

  return (
    <>
      <div className='container-fluid movie-app'>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading='Movies' />
          <SearchBox searchValue={searchValue} cb={updateSearchValue} />
        </div>
        <div className='row'>
          <MovieList movies={movies} />
        </div>
      </div>
      <h1>My Movie Blog!</h1>
      <ul>
        {blogs.map(blog => {
          return (
            <li key={blog.id} >
              {blog.movie_title}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
