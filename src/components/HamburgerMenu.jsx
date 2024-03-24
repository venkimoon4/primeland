import React from 'react'
import { Link } from 'react-router-dom'

const HamburgerMenu = () => {
  return (
    <nav className='nav-bar-main'>
      <div class="navbar ">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="logo">
          </div>
          <div class="menu-items">
            <li><Link href="/">Home</Link></li>
            <li><a href="#aboutus">About</a></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href="#footer">Contact</a></li>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HamburgerMenu
