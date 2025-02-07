import React,{useState } from 'react';
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo2.png';


//the class names are fixed and specified for navbar in css for react they are called BEM-->Block Element Modifier    
const Menu = () => (
  <>
         <p><a href="#home">Home</a></p>
          <p><a href="#whpt3">What is  AI</a></p>
          <p><a href="#features">why to join Us ?</a></p>
          <p><a href="#blog">AI Blogs</a></p>      
  </>
)
const Navbar = () => {
  const [toogleMenu,setToogleMenu] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
         <Menu/>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        
        <button type="button"><a href="#Register">Register Now</a></button>
      </div>
      <div className="gpt3__navbar-menu">
         {toogleMenu
         ? <RiCloseLine color='#fff' size={27} onClick = {() => setToogleMenu(false)}/>
        : <RiMenu3Line color='#fff' size={27} onClick = {() => setToogleMenu(true)}/>
         }
         {toogleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
             <Menu/>
            </div>
          </div>
         )}
      </div>
    </div>
  )
}

export default Navbar