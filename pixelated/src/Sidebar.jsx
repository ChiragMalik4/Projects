import React, { useState } from 'react'
import './Sidebar.css'


export const Sidebar = (props) => {
  const [isFolded, setFold] = useState(false)
  const Foldstatus = ()=>{
    setFold(!isFolded)

  }


  return (
      <div className={`sidebar ${isFolded?'fold':''}`}>
        <div className='logo'>
        <img src='logo.jpeg' width={40} height={40} alt='logo'/>
        </div>
        <div className='searchbar'>
          <input type='text' id='search' placeholder='Search'/>
        </div>
        <ul className='list'>
          <li>
            <img src='camera.png' alt="posts"/>
            <div>Posts</div>
            </li>
          <li>
            <img src='photo-book.png' alt="status"/>
            <div>Status</div>
          </li>
          <li>
            <img src='settings.png' alt="setting"/>
            <div>Setting</div>
          </li>
        </ul>
        
        <button className='fold-button' onClick={Foldstatus}>
          <img src='list-option.png' alt='list'/>
        </button>
        {props.children}
      </div>

  )
}

export default Sidebar