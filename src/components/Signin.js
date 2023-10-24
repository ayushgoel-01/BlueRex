import React from 'react'
import { Link } from 'react-router-dom'

export const Signin = () => {

  return (

    <div className='top'>
        <div className='box'>

            <h2 className='sin'>Sign in</h2>

              <form className='signin-form'>
               
                <input type='email' name='email' id='email1' placeholder="Email" required></input>
                
                <input type='password' name='password' id='password1' placeholder="Password" required></input>
               
                <button className='signin' onClick={()=>{alert('Thanks for Sign in');}}><Link to="/Home">Sign in</Link></button>

                <div className='sin-toggle'>
                  <p>New user? <Link to="/Signup">Sign up here</Link></p>
                </div>

              </form>
             
        </div>
    </div>
  )
}
