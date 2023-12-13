import React, { useState } from 'react'
import "../Touch admin portal/login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Login() {
const[username,setusername]=useState("")
const[password,setpassword]=useState("")
const navigate=useNavigate()


const handleusername=(data)=>{
setusername(data.target.value)

}
const handlepassword=(data)=>{
    setpassword(data.target.value)
    
    }
    
const handleSubmit=async(e)=>{

   
        e.preventDefault();
    
        try {
            const response = await axios.post('https://test.touchapp.in/auth/admin/login', {
                mobile: username,
                password: password,
            });
            if (response.status===200) {
                alert("login successfull")
                localStorage.setItem('token', response.data.data.token);
                navigate("/home")
                
              } else {
                console.log('Error:', response.data.message);
              }
    
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }



    };

    return (
        <>
<form className='login'>
<h1 className='heading'>Login</h1>
<div className='part1'><i class="fa fa-user-circle-o" aria-hidden="true"></i><label className='username'>User Name</label><br></br>
           <fieldset aria-hidden="true" className='feild'><legend className='legend'>user*</legend><input type='text' className='input' value={username} onChange={data=>{handleusername(data)}}/></fieldset></div><br></br>
            <div className='part2'><i class="fa fa-lock" aria-hidden="true"></i><label className='password1'>Password</label><br></br>
            <fieldset className='feild'><legend>password*</legend><input type='password' className='password' value={password} onChange={data=>handlepassword(data)}/></fieldset></div><br/><br/>
            <button className='submit' onClick={handleSubmit}>submit</button>
        </form>   
        </>
    )
}

export default Login