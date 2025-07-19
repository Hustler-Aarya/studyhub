import React from 'react';
import './About.css';
import Bg from "../images/pic5.jpg";
import Fr from "../components/Footer"

const About = () => {
  return (
    <>
    <div className='contan'>
    <div className='abut'>
      <h2 className='h2_style'>
        About Us
      </h2>
      <p className='p_styl'>This website is for those who want to learn online <br />
      We are here to help so be the first to grab the benefits.
      We provide you the mentors of different fields.</p>
        
        </div>
        <div className='imgi_stl'>
        <img  src={Bg} alt="" srcset="" />
        </div>
       
    </div>
    <Fr/>
    </>
  );
}

export default About;
