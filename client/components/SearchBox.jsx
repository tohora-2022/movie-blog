import React, { useState } from 'react'

export default function SearchBox (props) {
  const callback = props.handleSearchButton
  const [formData, setFormData] = useState({
    movie: ''
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
    callback(formData.movie)
    return null
  }

  return (
    <div className='col col-sm-4'>
      <form onSubmit={handleSubmit}>
        <input name='movie'
          className='form-control'
          value={formData.movie}
          placeholder='Type to search...'
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </div>
  )
}
