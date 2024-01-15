import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import AnimateRoute from "./animated-routes";

const App =()=>{
    return(
        <Router basename={process.env.PUBLIC_URL}>
            <AnimateRoute/>
        </Router>
       


    )



}


export default App