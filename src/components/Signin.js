import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Result} from './Result';

export const Signin = () => {

  const[user,setUser] = useState({
      email:"", password:""
    });

  let name, value;
  const handleInputs = (e) =>{
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  return (

    <div className='top'>
        <div className='box'>

            <h2 className='sin'>Sign in</h2>

              <form className='signin-form'>
               
                <input
                type='email' 
                name='email' 
                id='email1' 
                value={user.email}
                onChange={handleInputs}
                placeholder="Email" 
                required></input>
                
                <input 
                type='password' 
                name='password' 
                id='password1' 
                value={user.password}
                onChange={handleInputs}
                placeholder="Password" 
                required></input>
               
                <button className='signin' onClick={()=>{alert('Thanks for Sign in')}}><Link to="/Result" state={{ data : user}}>Sign in</Link></button>

                <div className='sin-toggle'>
                  <p>New user? <Link to="/Signup">Sign up here</Link></p>
                </div>

              </form>

             
        </div>

    </div>
  )
}
