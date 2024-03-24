import React from 'react'

const Footer = () => {
  return (
    <footer id='footer'>
      <div>
        <img src='./images/logo.png' width="100px"/>

        <h2><u>CORPORATE OFFICE:</u></h2>
        <p>My Home Hub, 7th Floor, Block 2, Madhapur, Hitechcity Hyderabad, Telangana 500033.</p>

        <h2><u>BANGALORE OFFICE:</u></h2>
        <p>40/1A, 1st floor, Basappa Complex, Lavelle Road, behind Rotary Club, Bengaluru, Karnataka 560001</p>

        <h2><u>EMAIL</u></h2>
        <p>info@primelandindia.com</p>
      </div>

     <div className='links'>
     <h2>Quick Links</h2>
     <hr/>
     <a>+Our Story</a>
     <a>+Partner With Us</a>
     <a>+Gallery</a>
     <a>+NRI</a>
     <a>+EMI Calculator</a>
     <a>+Contact Us</a>
     </div>

     <div className='links'>
     <h2>Projects</h2>
     <hr/>
     <a>+Pedda Amberpet</a>
     <a>+Reserve</a>
     <a>+Iconia</a>
     <a>+The One</a>
     <a>+Greenfield at Kommireddypally</a>
     <a>+Greenfield Nandipet</a>
     </div>

     <div className='video'>
     <h2>Video Intro</h2>
     <hr/>
     <video src='' controls width="100%"></video>
     </div>

    </footer>
  )
}

export default Footer
