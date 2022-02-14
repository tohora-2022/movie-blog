import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBlogs } from '../actions'

export default function Blogs () {
  const blogs = useSelector(state => state.blogs)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [])

  return (
    <div className='col'>
      <ul>
        {blogs.map(blog => {
          return (
            <li key={blog.id} >
              <p>Movie: {blog.movie_title}</p>
              <p>Review: {blog.movie_review}</p>
              <p>Rating: <img src={`/images/${blog.star_rating}star.png`} className='image'></img></p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
