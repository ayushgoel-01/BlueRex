import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

export const Signup = () => {

    const[user,setUser] = useState({
        fname:"", lname:"", email:"", password:"", cpassword:""
    });

    let name, value;
    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

  return (

    <div className='top1'>
        <div className='box1'>

            <h2 className='sin1'>Sign up</h2>

              <form className='signin-form1'>

                <input 
                type='text' 
                name='fname' 
                id='name1'
                value={user.fname}
                onChange={handleInputs} 
                placeholder='First Name' 
                required></input>

                <input 
                type='text' 
                name='lname' 
                id='name1'
                value={user.lname}
                onChange={handleInputs} 
                placeholder='Last Name' 
                required></input>
               
                <input 
                type='email' 
                name='email' 
                id='email11'
                value={user.email}
                onChange={handleInputs} 
                placeholder="Email" 
                required></input>
                
                <input 
                type='password' 
                name='password' 
                id='password11' 
                value={user.password}
                onChange={handleInputs}
                placeholder="Enter Password" 
                required></input>

                <input 
                type='password' 
                name='cpassword' 
                id='password111' 
                value={user.cpassword}
                onChange={handleInputs}
                placeholder="Confirm Password" 
                required></input>
               
                <button className='signin1' onClick={()=>{alert('Thanks for Sign up')}}><Link to="/Result2" state={{data:user}}>Sign up</Link></button>

                <div className='sin-toggle'>
                  <p>Already have account? <Link to="/Signin">Sign in here</Link></p>
                </div>

              </form>
             
        </div>
    </div>
  )
}
