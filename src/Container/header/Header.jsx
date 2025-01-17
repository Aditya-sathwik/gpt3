import React, { useEffect } from 'react';
import './header.css';
import people from "../../assets/people.png";
import ai from "../../assets/ai8.png";
import AOS from 'aos'
import 'aos/dist/aos.css'


const Header = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  }
,[])
  return (
    <>
    <div className='gpt3__header section__padding' id='home' data-aos="fade-up">
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>Connect, Learn, and Grow Together!</h1>
        <p>Join our vibrant meetup community! Explore inspiring discussions, share ideas, and connect with like-minded individuals. Together, we celebrate growth, collaboration, and new opportunities. Experience joy and innovation in every session</p>
        {/* <div className="gpt3__header-content_input">
          <input type="email" placeholder='Enter your email address' />
          <button type='button'>Get started</button>
        </div> */}
        {/* <div className="gpt3__header-content__people">
          <img src={people} alt="png iumage" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div> */}
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>

      
    </div>

    <div className="gpt3__cta" data-aos="fade-left">
       <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
       </div>
       <div className="gpt3__cta-btn">
        <button type="button" ><a href="#Register">Get Started</a></button>
       </div>
    </div>

    </>
  )
}

export default Header