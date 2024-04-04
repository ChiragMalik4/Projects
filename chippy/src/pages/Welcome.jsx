import React, {useEffect, useState } from 'react'
import '../components/css/Welcome.css'
import { useNavigate } from 'react-router-dom';


export const Welcome = ()=>{
    const navigate = useNavigate();

    const Signuproute = ()=>{
        navigate('/Signup');
    }

    const Loginroute = ()=>{
        navigate('/Login');

    }

    return(
        <div className="welcome-bg">
            <div className="welcome-content">
                Welcome
            </div>
            <div className="forms">
                <button id='signup' onClick={Signuproute}>Sign Up</button>
                <button id='login' onClick={Loginroute}>Login</button>
            </div>
           

        </div>
    )
}



export default Welcome