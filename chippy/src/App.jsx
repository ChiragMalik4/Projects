import React from "react";
import {HashRouter as Router} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import { Signup } from "./pages/Signup.jsx";
import { Login } from "./pages/Login.jsx";
import Welcome from "./pages/Welcome.jsx";
import Chippy from "./pages/Chippy.jsx";

const App =()=>{
    return(
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Chat" element={<Chippy />} />
          </Routes>     
        </Router>

       
    )

}


export default App