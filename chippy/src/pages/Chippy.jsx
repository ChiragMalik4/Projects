import React, {useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import '../components/css/Theme.css'

import { useNavigate } from 'react-router-dom';



export const Chippy = () => {
    const navigate = useNavigate();

    const [Theme, setTheme] = useState(1)
    let theme = `theme${Theme}`
    const Themeapply=()=>{
      setTheme(Theme+1)
      if(Theme===4){
        setTheme(1)
      }
    }

    const handlelogout = ()=>{
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('user_data');
      navigate('/Login');
  }

  useEffect(()=>{
    const islog = localStorage.getItem("loggedIn");
    if(!islog){
        navigate('/Login');
    }
}, [navigate]);



    return (
      <div>
        <div className={`container ${theme}`}>
          
        </div>
  
        <Sidebar>
          
          <button className='theme-button' onClick={Themeapply}>
            Click Me!
          </button>

          <button className='Logout' onClick={handlelogout}>
            LogOut
          </button>
          
          
        </Sidebar>
        </div>
        
    )

    }

export default Chippy