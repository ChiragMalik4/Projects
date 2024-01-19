import React from "react";
import {HashRouter as Router} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import Container from "./Container.jsx";

const App =()=>{
    return(
        <Router>
          <Routes>
            <Route path="/" element={<Container />} />
          </Routes>
            
        </Router>
       


    )

}


export default App