import React, { useState, useEffect } from 'react'
import { getBlogs, getMovieRequest } from '../api'
// import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from './MovieList'
import MovieListHeading from './MovieListHeading'
import SearchBox from './SearchBox'
import AddFavourites from './AddFavourites'
import RemoveFavourites from './RemoveFavourites'

function App () {
  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState([])
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState([])
  const [favourites, setFavourites] = useState([])

  const updateSearchValue = (movie) => {
    setSearchValue(movie)
  }

  // function saveToLocalStorage (items) {
  //   localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  // }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie]
    setFavourites(newFavouriteList)
    // saveToLocalStorage(newFavouriteList)
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    )

    setFavourites(newFavouriteList)
    // saveToLocalStorage(newFavouriteList)
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

  // useEffect(() => {
  //   const movieFavourites = JSON.parse(
  //     localStorage.getItem('react-movie-app-favourites')
  //   )

  //   setFavourites(movieFavourites)
  // }, [])

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
          <SearchBox searchValue={searchValue} handleSearchButton={updateSearchValue} />
        </div>
        <div className='row'>
          <MovieList movies={movies} favouriteComponent={AddFavourites} handleFavouritesClick={addFavouriteMovie} />
        </div>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading='Favourites' />
        </div>
        <div className='row'>
          <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavourites} />
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
