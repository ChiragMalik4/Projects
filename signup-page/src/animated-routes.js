import React from "react";
import {Route, Routes, useLocation} from 'react-router-dom'
import Card from './card'
import Signup from "./signup";
import {AnimatePresence} from 'framer-motion'

const AnimateRoute =()=>{
    const location = useLocation()
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/Signup" element={<Signup/>}/>
                <Route path="/Signin" element={<Card/>}/>
                <Route path="/" element={<Card/>}/>
            </Routes>
        </AnimatePresence>

    )
}



export default AnimateRoute