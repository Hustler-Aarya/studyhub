import React from 'react'
import './Course.css'
import Card from './Card'
import Web1 from "../images/web1.png"
import Pic2 from '../images/pic2.png'
import Pic4 from '../images/pic4.jpg'
import Fr from "../components/Footer"

const Course = () => {
  return (
    <>
    <div className="course-container">
    
    <p className='large-font'>Top Rated Courses
    
    </p>
    <p className='small-font'>Some of the most demanded courses waiting for you.
      explore them and enhance your skills.
    </p>
    <div className='cardstyl'>
    <Card 
    title="Web Designing"
    image={Web1}
    about="A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away."
    btn="View Course"/>
    <Card 
    title="UI/UX Designing"
    image={Pic2}
    about="Before working to design the thing right, we must first be sure we're designing the right thing,knows he has achieved perfectio."
    btn="View Course"/>
    <Card 
    title="App Designing"
    image={Pic4}
    about="Every smart person that I admire in the world, and those I semi-fear, is focused on this concept of crypto for a reason."
    btn="View Course"/>
    <Card 
    title="Web Designing"
    image={Web1}
    about="A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away."
    btn="View Course"/>
    <Card 
    title="UI/UX Designing"
    image={Pic2}
    about="A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away."
    btn="View Course"/>
    <Card 
    title="App Designing"
    image={Pic4}
    about="A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away."
    btn="View Course"/>
     <Card 
    title="Web Designing"
    image={Web1}
    about="A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away."
    btn="View Course"/>
    <Card 
    title="UI/UX Designing"
    image={Pic2}
    about="A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away."
    btn="View Course"/>

    
    </div>
    <Fr/>
    </div>
    
  </>
  )
}

export default Course