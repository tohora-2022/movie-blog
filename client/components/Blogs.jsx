import React from 'react'

export default function Blogs (props) {
  const blogs = props.blogs
  return (
    <div className='col'>
      <ul>
        {blogs.map(blog => {
          return (
            <li key={blog.id} >
              <p>Movie: {blog.movie_title}</p>
              <p>Review: {blog.movie_review}</p>
              <p>Rating: <img src='/images/4star.png' className='image'></img>{blog.star_rating}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
