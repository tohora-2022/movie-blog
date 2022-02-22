import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return (<button className="btn btn-primary" disabled>
      <span className="spinner-border spinner-border-sm"></span>
      Loading...
    </button>)
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>Hi {user.nickname}!!</h2>
        <p>{user.email}</p>
      </div>
    )
  )
}

export default UserProfile
