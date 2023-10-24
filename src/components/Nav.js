import React, { useState } from 'react'
import { Routes, Router , Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Sec1 } from "./Sec1";
import { Sec2 } from "./Sec2";
import { Sec3 } from "./Sec3";
import { Sec4 } from "./Sec4";
import { Sec5 } from "./Sec5";
import { Sec6 } from "./Sec6";
import { Sec7 } from "./Sec7";
import { Sec8 } from "./Sec8";
import { Sec9 } from "./Sec9";
import { Sec10 } from "./Sec10";
import { Sec11 } from "./Sec11";
import './Landing.css';


export const Nav = () => {

    const [isActive,setIsActive]=useState(false);

  return (

    <div className="navbar">

            <div className="logo">
                <img src={require('./images/logo.png')} alt=""></img>
                <div className="p">BlueRex</div>
            </div>

            <span class="navbar-toggle" id="js-navbar-toggle">  <img src={require("./images/Ham-burger.png")} alt="" className="Ham-burger" onClick={()=>setIsActive((current)=>!current
            )}></img></span>


            <ul className={isActive ? "nav main-nav active" : "nav main-nav"}>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/feature">Features</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/review">Reviews</Link></li>
                <li><Link to="/faq">Faq</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/Signin">Sign in</Link></li>
                <li><Link to="/Signup">Sign up</Link></li>


            {/* <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#feature">Features</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#review">Reviews</a></li>
            <li><a href="#faq">Faq</a></li>
            <li><a href="#contact">Contact</a></li> */}

            </ul> 


            {/* <Routes>
            <Route path='/Home' element={<Sec1/>}/> 
            <Route path='/about' element={<Sec2/>}/>
            <Route path='/feature' element={<Sec5/>}/>
            <Route path='/product' element={<Sec6/>}/>
            <Route path='/review' element={<Sec7/>}/>
            <Route path='/faq' element={<Sec8/>}/>
            <Route path='/contact' element={<Sec9/>}/>

            </Routes> */}
            </div>
           
  )
}
