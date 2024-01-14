import React from "react";
import { Link } from "react-router-dom";
import './card.css'
import { motion } from "framer-motion";




const Card = ()=>{

    


    return(
        <div className="container">
            <video className="bgvideo" autoPlay loop muted controls={false}>
                <source src="Bgvideo1.mp4" type="video/mp4"/>
                Your browser doesn't support the video tag.
            </video>
            <div className="card">
                
                <div className="left-card">

                    <video className="balls-blue" autoPlay loop muted controls={false}>
                        <source src="Energyball1.mp4" type="video/mp4"/>
                    </video>
                    
                    
                </div>
                <motion.div className="flip"
                        initial={{rotateY:-180, scale:1, width:300}}
                        animate={{rotateY:0, scale:1, width:300}}
                        exit={{rotateY:-360, scale:1, width:300}}
                        transition={{duration:0.4}}
                        
                    >
                    <div className="right-card">
                        
                            <form className="formcontainer">
                                
                                <h1>SIGN IN</h1>
                
                                <div>
                                    <input type="text" id='username' placeholder="Username"/>
                                </div>
                                <div>                         
                                    <input type="password" id='password' placeholder="Password"/>
                                </div>
                                <button typeof="button">Sign In</button>
                                <small>
                                    Don't have an account? <Link to="/Signup">Sign up</Link>
                                </small>                          
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>




    )



}


export default Card