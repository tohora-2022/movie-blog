import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBlogs } from '../actions'
import { Routes, Route, Link } from 'react-router-dom'
import AddBlog from './AddBlog'

export default function Blogs () {
  const blogs = useSelector(state => state.blogs)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [])

  return (
    <>
      <div className='col-md-6'>
        <h1>My Movie Blogs!</h1>
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
      <div className='col-md-6'>
        <Link to='/user/11/newblog'>Add a new blog</Link>
        <Routes>
          <Route path='/user/11/newblog' element={<AddBlog/>}/>
        </Routes>
      </div>
    </>
  )
}
