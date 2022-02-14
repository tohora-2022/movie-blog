import React from 'react'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'

export default function Login (props) {
  return (
    <div className='col col-sm-3'>
      <Link to={'/users/11'}> Login </Link>
    </div>
  )
}
