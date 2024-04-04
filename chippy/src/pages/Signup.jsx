import React, { useState } from 'react'
import '../components/css/Signup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Signup = ()=>{
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        if (Name.trim() === '') {
            alert("Enter Name!");
            return;
        } else if (Email.trim() === '') {
            alert("Enter Email!");
            return;
        } else if (Password.trim() === '') {
            alert("Enter Password!");
            return;
        }

        const url = 'https://chiragmalik4.github.io/Projects/chippy/server/signup.php';
        const formData = new FormData();
        formData.append('Name', Name);
        formData.append('Email', Email);
        formData.append('Password', Password);

        axios.post(url, formData)
            .then(response => {
                const data = response.data;
            if (data.success) {
                
                alert(data.message);
               
                navigate('/Login');
            } else {
                alert(data.message);
            }
        })
            .catch(error => alert("Error: " + error.message));
    }

    return (
        <div className='signup-bg'>
        <div className='signup-container'>
            <form className='signup-form'>
                <label htmlFor="name">Name</label>
                <input type="text" className='signup-form-input' onChange={(e)=>setName(e.target.value)}/><br />
                <label htmlFor="email">Email</label>
                <input type="text" className='signup-form-input' onChange={(e)=>setEmail(e.target.value)}/><br />
                <label htmlFor="password">Password</label>
                <input type="password" className='signup-form-input' onChange={(e)=>setPassword(e.target.value)}/><br />
                <label htmlFor="submit"></label>
                <input type="submit" className='signup-button' value='Sign Up' onClick={handleSubmit}/>
            </form>
            </div>

        </div>
    )
}

export default Signup