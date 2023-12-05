import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <div>Navbar</div>
      <Link to={'/'}>Home</Link>
      <br />
      <Link to={'/Blog'}>Blog</Link>
      <br />
      <Link to={'/About'}>About</Link>
    </>
  )
}
