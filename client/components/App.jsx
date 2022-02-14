import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getMovieRequest } from '../api'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'
import LoginForm from './LoginForm'
import Blogs from './Blogs'
import MovieList from './MovieList'
import MovieListHeading from './MovieListHeading'
import SearchBox from './SearchBox'
import AddFavourites from './AddFavourites'
import RemoveFavourites from './RemoveFavourites'
import AddBlog from './AddBlog'
import './app.css'
import { useDispatch } from 'react-redux'
import { fetchBlogs } from '../actions'

function App () {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState([])
  const [favourites, setFavourites] = useState([])

  const dispatch = useDispatch()

  const updateSearchValue = (movie) => {
    setSearchValue(movie)
  }

  // function saveToLocalStorage (items) {
  //   localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  // }

  const addFavouriteMovie = (movie) => {
    const newList = favourites.filter(favourite => favourite.imdbID !== movie.imdbID)
    const newFavouriteList = [...newList, movie]
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

  // useEffect(() => {
  //   setLoading(true)
  //   dispatch(fetchBlogs)
  // }, [])

  if (loading) return (<p>'loading...'</p>)

  return (
    <>
      <div className='container-fluid movie-app'>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          {movies.length !== 0 ? <MovieListHeading heading='Movies'/> : <MovieListHeading heading='Welcome to my blog'/>}
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<LoginForm/>}/>
          </Routes>
          <SearchBox searchValue={searchValue} handleSearchButton={updateSearchValue} />
        </div>
        <div className='row'>
          <MovieList movies={movies} favouriteComponent={AddFavourites} handleFavouritesClick={addFavouriteMovie} />
        </div>
        <div className='row d-flex align-items-center mt-4 mb-4'>
          {favourites.length !== 0 && <MovieListHeading heading='Favourites' />}
        </div>
        <div className='row'>
          <MovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavourites} />
        </div>
      </div>
      <div className='row d-flex mt-4 mb-4'>
        <h1>My Movie Blogs!</h1>
        <Blogs/>
        <Routes>
          <Route path='/users/11/blog' element={<AddBlog/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
