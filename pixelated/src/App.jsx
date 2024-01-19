import React, { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import './Container.css'


export const App = () => {
  const [Theme, setTheme] = useState(1)
  let theme = `theme${Theme}`
  const Themeapply=()=>{
    setTheme(Theme+1)
    if(Theme===4){
      setTheme(1)
    }
  }
  return (
    <div>
      <div className={`container ${theme}`}>
        
      </div>

      <Sidebar>
        <button className='theme-button' onClick={Themeapply}>
          Click Me!
        </button>
        
        
      </Sidebar>
      <audio controls autoPlay>
          <source src='Sparkle.mp3' type='audio/mp3'/>
          Your browser doesn't support the audio element.
      </audio>
      
      
      


    </div>
        
      
  )
}


export default App