import React from 'react';
import {Article} from '../../Components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id='blog' data-aos="fade-down">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening,
          We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container"> 
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl= {blog01} date="Sept 26,2021" title=" AI is the future. Let us exlore how it is?" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article  imgUrl={blog02} date="Sept 26,2021" title=" AI is the future. Let us exlore how it is?"/>
          <Article  imgUrl={blog03} date="Sept 26,2021" title=" AI is the future. Let us exlore how it is?"/>
          <Article  imgUrl={blog04} date="Sept 26,2021" title=" AI is the future. Let us exlore how it is?"/>
          <Article  imgUrl={blog05} date="Sept 26,2021" title=" AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog