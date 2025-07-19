import React,{useCallback} from 'react'
import Sidebar from '../components/Sidebar'
import Video from '../Videocalling/Video'
import './Viewcourse.css'
import { useNavigate } from 'react-router-dom';
const Viewcourse = () => {

  const navigate = useNavigate();

  const handleJoin = useCallback(() => {
    navigate('/course'); 
  }, [navigate]);
  return (
    <>
    <div className='view_course'>
      <Sidebar/>
          <div className='scroll'>
          <button  onClick={handleJoin} type="button">Back to Course</button>
          <Video/>
        </div>
        </div>
       
    </>
  )
}

export default Viewcourse