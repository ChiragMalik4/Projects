import React, { useState } from 'react'
import '../components/css/Sidebar.css'
import FriendReq from './Friendreq';
import Inbox from './Inbox';
import { Friends } from './Friends';




export const Sidebar = (props) => {
  const user_info = localStorage.getItem('user_data');
  const userinfo = JSON.parse(user_info);
  
  
  const [isFolded, setFold] = useState(false)
  const Foldstatus = ()=>{
    setFold(!isFolded)

  }

  const [showBox, setBox] = useState(null);

  const Togglebox =(identity)=>{
    if(showBox == identity){
      setBox(null);
    }
    else{
      setBox(identity);
    }
  }



  return (
    
    <div className='sections'>
      <div className={`sidebar ${isFolded ? 'fold' : ''}`}>
      <div className='logo'>
        <img src='logo.jpeg' width={40} height={40} alt='logo' />
        <div>
          <h5>{userinfo.username}</h5>
          <h6>ID: {userinfo.id}</h6>
        </div>

      </div>
      <div className='searchbar'>
        <FriendReq />
      </div>

      <ul className='list'>
        <li onClick={()=>Togglebox(1)}>
          <img src='camera.png' alt="posts" />
          <div>Posts</div>
        </li>
        <li onClick={()=>Togglebox(2)}>
          <img src='photo-book.png' alt="status" />
          <div>Friends</div>
        </li>
        <li onClick={()=>Togglebox(3)}>
          <img src='settings.png' alt="setting" />
          <div>Inbox</div>
        </li>
      </ul>

      <button className='fold-button' onClick={Foldstatus}>
        <img src='list-option.png' alt='list' />
      </button>
      {props.children}
    </div>
    {showBox==2 && <Friends isFolded={isFolded}/>}
    {showBox==3 && <Inbox isFolded={isFolded}/>}
    </div>

  )
}

export default Sidebar

