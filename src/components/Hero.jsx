import React from "react";

const Hero = () => {
  return (

    <div>

    <div className="hero-container">
      <div className="hero">
      <img src="./images/hero-logo.jpeg" />
      </div>
      <div className="quotes-section">
      <h1>A Great Investment For The Future</h1>
      <p>Right Angle To Make Your Idea Into Reality</p>
      <p>Build The Right House To Live Smart</p>
      </div>
    </div>


    <div className="primeland-info-container">
      <h1>THE PRIMELAND MARK</h1>
      <p>We work with a purpose and the purpose is to create value for everyone.</p>

      <div className="prime-container">
        <img src="./images/primeland-logo.png" width="300px"/>
        <div className="prime-container-info">
          <p className="para">At Primeland, we focus on developing positive, smarter and sustainable communities to elevate the lifestyles for everyone. We believe that every customer would like to be surrounded by the finer things in life, every property we develop has been prudently considered, thoughtfully planned, methodically designed and robustly built with a seasoned buyer in mind.</p>
          <p className="para">Our commitment to our customers has been at the core of what we do and have always placed a premium on a collaborative and a “win-win” relationship’s.</p>
          <button>About Us</button>
          <div className="prime-container-expertise">
          <div>
            <p>INDUSTRY EXPERIENCE</p>
            <h1>25+</h1>
          </div>
          <div>
            <p>ACRES CRAFTED</p>
            <h1>2K+</h1>
          </div>
          <div>
            <p>HAPPY CUSTOMERS</p>
            <h1>10K+</h1>
          </div>
          </div>
        </div>
      </div>
    </div>

    <section id="aboutus">
      
      <div className="aboutus-container">

       <div className="aboutus-container-img">
       <img src="./images/about-logo.png" width="70px"/>
        <h1>WHY PEOPLE</h1>
        <h1>CHOOSE <span>PRIMELAND</span></h1>
        <p>We work with a purpose and the purpose is to create value for everyone.</p>
        <button>About Us</button>
       </div>

       <div className="aboutus-container-info">

        <div className="aboutus-container-info-part-1">
         
         <div className="first">
          <h1>01</h1>
          <h1>Passion</h1>
          <p>We are passionate about what we do and we believe that Real Estate Development can change the landscape of the markets and also to the people’s lives. We’re relentlessly focused on growth opportunities to create increased value for everyone.</p>
         </div>

         <div>
          <h1>02</h1>
          <h1>Value Creation</h1>
          <p>We work with a purpose and the purpose is to create value for every stake holder that is associated with us, whether it is a minute detail, a complex design, or a business transaction. We have constantly evolved to the changing markets to promote a positive change.</p>
         </div>


        </div>

        <div className="aboutus-container-info-part-1">
         
         <div>
          <h1>03</h1>
          <h1>Commitment</h1>
          <p>We do what we say and believe in doing the right thing. We are honest about what we think and commit only when we have conviction. We celebrate progress not just results. We believe everything we do has to be of the highest possible standard at all times.</p>
         </div>

         <div className="first">
          <h1>04</h1>
          <h1>Sustainability</h1>
          <p>What some call difficult, we love doing it. We go beyond property development to creating meaningful and sustainable communities that are built to last. We care for nature and constantly the best practices to significantly reduce the negative impact on the environment.</p>
         </div>
         

        </div>

       </div>


      </div>

    </section>

    <section id="feature-projects">

     <div className="feature-projects-container">
      <h1>OUR FEATURED <span>PROJECTS</span></h1>

       <div className="feature-container">

        <div className="feature-img">
          <img src="./images/mahabubanagar.jpg" width="200px"/>
          <p className="feature-para">The One @ MAHABUBANAGAR , TELANGANA</p>
        </div>

        <div className="feature-img">
        <img src="./images/gudur.webp" width="200px"/>
          <p className="feature-para">Resever @ GUDUR , TELANGANA</p>
        </div>

        <div className="feature-img">
        <img src="./images/balanagar.webp" width="200px"/>
          <p className="feature-para">ICONIA @ BALANAGAR , TELANGANA</p>
        </div>

        <div className="feature-img">
        <img src="./images/nandhipet.jpg" width="200px"/>
          <p className="feature-para">GREEN FIELDS @ NANDHIPET , TELANGANA</p>
        </div>

       </div>

     </div>

    </section>

    <section id="testimonials">

    <p>TESTIMONIALS</p>
       <h1>OUR CUSTOMER <span>WORDS</span></h1>

      <div className="testimnials-container">
      
       <div className="testimonial-profile-container">
       <span>''</span>
       <div className="testimonials-profile">
        <h2>Anand Mishra</h2>
        <p>Kompally, Hyderabad</p>
        <img src="./images/no-image.png" width="100px"/>
        <p>Best real estate company for the investment purpose in approved layouts with fabulous offers from the company.</p>
       </div>
       </div>

       <div className="testimonial-profile-container">
       <span>''</span>
       <div className="testimonials-profile">
        <h2>Srinivas Rao</h2>
        <p>Kompally, Hyderabad</p>
        <img src="./images/no-image.png" width="100px"/>
        <p>I am happy that I purchased a villa with Primeland Group because the quality of materials they used are very great and long lasting.</p>
       </div>
       </div>

       <div className="testimonial-profile-container">
       <span>''</span>
       <div className="testimonials-profile">
        <h2>Pradeep Kumar</h2>
        <p>Indra Nagar,Bangalore</p>
        <img src="./images/no-image.png" width="100px"/>
        <p>Really impressed by the customer service team, they are extremely friendly and always helpful for a picky buyer like me.</p>
       </div>
       </div>


      </div>

    </section>

    </div>


  );
};

export default Hero;
