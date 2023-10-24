import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Result2 = (props) => {
    const location = useLocation();
    const data = location.state?.data;
  return (
    <div className='result'>
        <h2>You entered the values in Sign up page as mentioned below:- </h2><br/>
        <p>First Name:- {data.fname}</p><br/>
        <p>Last Name:- {data.lname}</p><br/>
        <p>Email:- {data.email}</p><br/>
        <p>Password:- {data.password}</p><br/>
        <p>Confirmed Password:- {data.cpassword}</p><br/>

        <button className='result-btn'><Link to='/Home'>Go to Home</Link></button>
    </div>
  )
}
