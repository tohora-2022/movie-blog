import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getMovieRequest } from '../api'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import Blogs from './Blogs'
import MovieList from './MovieList'
import MovieListHeading from './MovieListHeading'
import SearchBox from './SearchBox'
import AddFavourites from './AddFavourites'
import RemoveFavourites from './RemoveFavourites'
import UserProfile from './UserProfile'
import './app.css'

function App () {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState([])
  const [favourites, setFavourites] = useState([])

  const updateSearchValue = (movie) => {
    setSearchValue(movie)
  }

  const addFavouriteMovie = (movie) => {
    const newList = favourites.filter(favourite => favourite.imdbID !== movie.imdbID)
    const newFavouriteList = [...newList, movie]
    setFavourites(newFavouriteList)
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    )

    setFavourites(newFavouriteList)
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

  if (loading) {
    return (<button className="btn btn-primary" disabled>
      <span className="spinner-border spinner-border-sm"></span>
  Loading...
    </button>)
  }

  return (
    <>
      <div className="jumbotron text-center p-3 my-3 border bg-dark text-white">
        <Header/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Routes>
              <Route path='/' element={<Nav/>}/>
            </Routes>
          </div>
          <UserProfile/>
          <div className="col-md-6">
            <SearchBox searchValue={searchValue} handleSearchButton={updateSearchValue} />
          </div>
        </div>
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
      <div className='row d-flex mt-4 mb-4'>
        <Blogs/>
        {/* <Routes>
          <Route path='/users/11/blog' element={<AddBlog/>}/>
        </Routes> */}
      </div>
      <div className="jumbotron text-center p-3 my-3 border bg-dark text-white">
        <Footer/>
      </div>
    </>
  )
}

export default App
