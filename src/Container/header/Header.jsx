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
    <div className='gpt3__header section__padding' id='home' data-aos="fade-up">
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>Let’s Build Something amazing with AI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="gpt3__header-content_input">
          <input type="email" placeholder='Enter your email address' />
          <button type='button'>Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="png iumage" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header