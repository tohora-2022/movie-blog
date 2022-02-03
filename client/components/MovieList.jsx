import React from 'react'

export default function MovieList (props) {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key = {index} className='image-container d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt='movie'></img>
        </div>
      ))}
    </>
  )
}
