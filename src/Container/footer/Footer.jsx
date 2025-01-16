import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo2.png'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

import form from '../form/form';

const FooterLinkSection = ({ title, links }) => (
  <div className="gpt3__footer-links_div">
    <h4>{title}</h4>
    {links.map((link, index) => (
      <p key={index}>{link}</p>
    ))}
  </div>
);

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading" data-aos="zoom-in">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>
      <div className="gpt3__footer-btn" data-aos="zoom-in">
        <p>Request Early Acess</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>LearnAI Hyderabad, All Rights Reserved</p>
        </div>
        <FooterLinkSection 
          title="Links" 
          links={["overons", "Social Media", "counters", "Contact"]} 
        />
        <FooterLinkSection 
          title="Company" 
          links={["Terms & Conditions", "Privacy Policy", "Contact"]} 
        />
        <FooterLinkSection 
          title="Get in touch" 
          links={["learn AI, Hyderabad", "040-132567", "info@payme.net"]} 
        />
      </div>
      <div className="gpt3__footer-copyright">
        <p>@2023 LEARNAI. All rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;