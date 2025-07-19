import React from 'react'
import './home.css'
import Vg from "../images/p6.png";
import Fr from "../components/Footer"

const Home = () => {
  return (
   
   <>
   <div className='home_styl'>
    <div className='home_imgsyl'>
      <h1 className='hm_stl'>
       Welcome in elearn!
      </h1>
      <p className='p_pstyl'> Build your carrier with us and grab the opportunity.</p>

    </div>
    <div className='hm_niche'>
      <div className='p_hm'>
      <p className='pp_styl'>
        Here we are! <br />
        We provide the best courses and masters just for you <br />
        Choose any teacher whom you want to learn  <br />and we will fill your wish because <br />
         whatever we do, is just for you.
      </p>
      </div>
      <div className='ig_hm'>
      <img  src={Vg} alt="" srcset="" />
      </div>
    </div>
      <Fr/>
   </div>
    
    </>
  )
}

export default Home