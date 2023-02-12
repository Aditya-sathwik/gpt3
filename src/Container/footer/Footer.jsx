import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo2.png'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding" >
      <div className="gpt3__footer-heading" data-aos="zoom-in" >
        <h1 className="gradient__text" >Do you want to step in to the future before others</h1>
      </div>
      <div className="gpt3__footer-btn" data-aos="zoom-in">
         <p>Request Early Acess</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo"  />
          <p>LearnAI hyderbad, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
           <h4>Links</h4>
           <p>overons</p>
           <p>Social Media</p>
           <p>counters</p>
           <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
        <h4>Company</h4>
           <p>Terms & Conditions</p>
           <p>Privacy Policy</p>
           <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
           <p>learn AI ,hyderbad</p>
           <p>040-132567</p>
           <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
          <p>@2023 LEARNAI. All rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer