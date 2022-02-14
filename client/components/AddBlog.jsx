import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBlog } from '../actions'

export default function AddBlog () {
  // const callback = props.handleAddBlogButton
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    movieTitle: '',
    movieReview: '',
    starRating: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addBlog(formData))
    setFormData({
      movieTitle: '',
      movieReview: '',
      starRating: ''
    })
  }

  return (
    <div className='col col-sm-6'>
      <h1>Add a new blog</h1>
      <form onSubmit={handleSubmit}>
        <input name='movieTitle'
          className='form-control'
          value={formData.movieTitle}
          placeholder='Movie title'
          onChange={handleChange}
        />
        <input name='movieReview'
          className='form-control'
          value={formData.movieReview}
          placeholder='Review'
          onChange={handleChange}
        />
        <input name='starRating'
          className='form-control'
          value={formData.starRating}
          placeholder='Stars'
          onChange={handleChange}
        />
        <button>Submit Blog!</button>
      </form>
    </div>
  )
}
