import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (

    <div className='top1'>
        <div className='box1'>

            <h2 className='sin1'>Sign up</h2>

              <form className='signin-form1'>

                <input type='text' name='fname' id='name1' placeholder='First Name' required></input>

                <input type='text' name='lname' id='name1' placeholder='Last Name' required></input>
               
                <input type='email' name='email' id='email11' placeholder="Email" required></input>
                
                <input type='password' name='password' id='password11' placeholder="Enter Password" required></input>

                <input type='password' name='password' id='password11' placeholder="Confirm Password" required></input>
               
                <button className='signin1' onClick={()=>{alert('Thanks for Sign up');}}><Link to="/Home">Sign up</Link></button>

                <div className='sin-toggle'>
                  <p>Already have account? <Link to="/Signin">Sign in here</Link></p>
                </div>

              </form>
             
        </div>
    </div>
  )
}
