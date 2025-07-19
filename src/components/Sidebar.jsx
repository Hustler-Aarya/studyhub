import React from 'react'
import './Sidebar.css'
import items from "../components/Sideitem.json"
import Sideitem from './Sideitem'

const Sidebar = () => {
  return (
    <> 
    <div className='viewcourse'>
    <div className='view_course1'>
        { items.map((item, index) => <Sideitem key={index} item={item} />)}
        
          </div>
    </div>
    
    
    
    </>
  )
}

export default Sidebar