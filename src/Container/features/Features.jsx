import React from 'react';
import  {Feature } from '../../Components';
import './features.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const featuresData = [
  {
    title: "AI Meetup: Building Trust in Technology",
    text: "Join us for an insightful discussion on how AI is transforming industries and how trust is a critical factor in its adoption. Learn how we can address challenges and build stronger connections in the AI space.",
  },
  {
    title: "Networking with AI Enthusiasts",
    text: "Meet fellow AI enthusiasts, developers, and industry professionals. This is your opportunity to share ideas, collaborate, and grow your network in the AI community.",
  },
  {
    title: "Explore AI Innovations",
    text: "Discover the latest advancements in artificial intelligence, from machine learning to deep learning, and how these innovations are shaping the future of various sectors.",
  },
  {
    title: "Hands-on AI Workshops",
    text: "Engage in practical, hands-on workshops that will allow you to explore AI tools, frameworks, and real-world applications. Whether you're a beginner or an expert, there's something for everyone!",
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id='features' data-aos="zoom-in">
      <div className="gpt3__features-heading">
      <h1 className="gradient__text">
  The Future of AI Starts Today. Join Us and Be Part of the Revolution.
</h1>
<p>Request Early Access to Reserve Your Spot at the AI Meetup</p>

      </div>
      <div className="gpt3__features-container">
       {featuresData.map((item,index) =>(
        < Feature title ={item.title} text ={item.text} key ={item.title + index}/>

       ))}
      </div>
    </div>
  )
}

export default Features