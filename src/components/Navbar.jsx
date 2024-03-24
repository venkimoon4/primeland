import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <Link to="/" style={{textDecoration:"none",color:"white"}}>Home</Link>
      <a href='#aboutus' style={{textDecoration:"none",color:"white"}}>About Us</a>
      <Link to="/projects" style={{textDecoration:"none",color:"white"}}>Projects</Link>
      <a>Partner With Us</a>
      <Link to="/gallery" style={{textDecoration:"none",color:"white"}}>Gallery</Link>
      <a>Careers</a>
      <a>Knowledge Hub</a>
      <a href='#footer' style={{textDecoration:"none",color:"white"}}>Contact</a>
    </nav>
  )
}

export default Navbar
