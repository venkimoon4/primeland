import React from 'react'

const Header = () => {
  return (
    <header>

      <div className='left-section'>
       <div className='logo-container'>
      <img src='./images/logo.png' width="150px"/>
      <span>PRIME LAND</span>
      </div> 

      <div className='left-sub-section'>
      <img src='./images/home-icon.jpg' width="50px" height="50px"/>
       <div className='sub-section'>
        <p>My Home Hub</p>
        <p>Hitech City, Hyderabad</p>
       </div>
      </div>
      </div>

      <div className='right-section'>

        <div className='email-section'>
        <img src='./images/email-icon.webp' width="50px"/>
        <p>info@primelandindia.com</p>
        </div>

        <div className='social-section'>
         <img src='./images/facebook-icon.webp' width="30px" height="30px"/>
         <img src='./images/instagram-icon.avif' className="img" width="32px" height="32px"/>
         <img src='./images/youtube-icon.webp' width="30px" height="30px"/>
         <img src='./images/linkedin-icon.webp' width="30px" height="30px"/>
         <img src='./images/x-logo.jpg' className="img1" width="40px" height="40px"/>
        </div>

      </div>
      
    </header>
  )
}

export default Header
