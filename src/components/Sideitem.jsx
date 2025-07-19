import React from 'react'
import './Sideitem.css'

import { useState } from 'react'

const Sideitem = ({item}) => {
  const [open, setOpen] =useState(false)
  if(item.childrens){
  return (
    <div className={open ? "side_item open"  : "side_item"}>
        <div className='side_title'>
            <span className='spn'>
               { item.icon && <i className= {item.icon}></i>}
               {item.title}
               
            </span>
           
           <i class="bi bi-chevron-compact-down toggle-btn" onClick={() => setOpen(!open)}></i> 
        </div>
        <div className='side_content'>
             { item.childrens.map((child,index) => <Sideitem key ={index} item={child}/>)}
        </div>
    </div>
  )
  }
  else{
    return(
      <div className='side_item'>
        <div className='side_title'>
            <span className='spn'>
            { item.icon && <i className= {item.icon}></i>}
               {item.title}
            </span>
            </div>
      </div>
    )
  }
}

export default Sideitem