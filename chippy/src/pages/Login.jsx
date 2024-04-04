import React, { useEffect, useState } from 'react'
import '../components/css/Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export const Login = ()=>{

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        if (Email.trim() === '') {
            alert("Enter Email!");
            return;
        } else if (Password.trim() === '') {
            alert("Enter Password!");
            return;
        }

        const url = 'https://chiragmalik4.github.io/Projects/server/login.php';
        const formData = new FormData();
        formData.append('Email', Email);
        formData.append('Password', Password);

        axios.post(url, formData)
        .then(response => {
            console.log('Login response:', response.data);
            const data = response.data;
            if (data.success) {
                // If login is successful, display the welcome message
                alert(data.message);
                //store user info
                localStorage.setItem('user_data', JSON.stringify(data.user));
                //token
                localStorage.setItem('loggedIn', 'true');
                // Redirect to homepage upon successful login
                navigate('/Chat');
            } else {
                // If login is unsuccessful, display the error message
                alert(data.message);
            }
        })
        .catch(error => alert("Error: " + error.message));

    }




    useEffect(()=>{
        const islog = localStorage.getItem("loggedIn");
        if(islog){
            navigate('/Chat');
        }
    }, [navigate]);


    return(
        
        <div className="login-bg">
            <div className="login-container">
            <form className='login-form'>
                <label htmlFor="email">Email</label>
                <input type="text" className='login-form-input' onChange={(e)=>setEmail(e.target.value)}/><br />
                <label htmlFor="password">Password</label>
                <input type="password" className='login-form-input' onChange={(e)=>setPassword(e.target.value)}/><br />
                <label htmlFor="submit"></label>
                <input type="submit" className='login-button' value='Log In' onClick={handleSubmit}/>
            </form>
            </div>

        </div>
        
    )
}


export default Login