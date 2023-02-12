import React from 'react'
import {Footer,Blog,Possibility,Features,Whatgpt3,Header} from './Container';
import {Cta,Brand,Navbar} from './Components';
import './App.css'; 
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
        </div> 
        <Brand/> 
        <Whatgpt3/> 
        <Features/> 
        <Possibility/>
        <Cta/> 
        <Blog/> 
        <Footer/> 
    </div>
  )
}

export default App