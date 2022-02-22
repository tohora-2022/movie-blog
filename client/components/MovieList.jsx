import React from 'react'
import MovieListHeading from './MovieListHeading'

export default function MovieList (props) {
  const FavouriteComponent = props.favouriteComponent
  return (
    <>
      {props.movies.length !== 0 && <MovieListHeading heading='Movies'/>}
      {props.movies.map((movie, index) => (
        <div key = {index} className='image-container d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt='movie'></img>
          <div className='overlay d-flex align-items-center justify-content-center'>
            <div
              onClick={() => props.handleFavouritesClick(movie)}
              className='overlay d-flex align-items-center justify-content-center'
            >
              <FavouriteComponent />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
