import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SearchBox (props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
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
    return null
  }

  return (
    <div className='col col-sm-3'>
      <form onSubmit={handleSubmit}>
        <input name='username'
          className='form-control'
          value={formData.username}
          placeholder='username'
          onChange={handleChange}
        />
        <input name='password'
          className='form-control'
          value={formData.password}
          placeholder='password'
          onChange={handleChange}
        />
        <Link to='/users/11/blog'>Sign in</Link>
      </form>
    </div>
  )
}
