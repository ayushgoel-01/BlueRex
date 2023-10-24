import React from "react";
import './Landing.css';
import Navbar from "./Navbar";
import { useState } from "react";
import { Outlet, Route , Routes } from "react-router-dom";
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
import { Nav } from "./Nav";
import { Signin } from "./Signin";
import { Signup } from "./Signup";


function Landing(){
    
    return (
        
        <div className="wrapper">
        <div className="container">


            <Nav/>


        <Routes>
            <Route path='/Home' element={<Sec1/>}/> 
            <Route path='/about' element={<Sec2/>}/>
            <Route path='/feature' element={<Sec3/>}/>
            <Route path='/product' element={<Sec4/>}/>
            <Route path='/review' element={<Sec5/>}/>
            <Route path='/faq' element={<Sec6/>}/>
            <Route path='/contact' element={<Sec7/>}/>
            <Route path='/Signin' element={<Signin/>}/>
            <Route path='/Signup' element={<Signup/>}/>

            </Routes>

        {/* <Signin/> */}
        {/* <Sec1/> */}
        {/* <Sec2/>
        <Sec3/>
        <Sec4/>
        <Sec5/>
        <Sec6/>
        <Sec7/>
        <Sec8/>
        <Sec9/>
        <Sec10/>
        <Sec11/>     */}

        <div>
            <div className="footer">
                <div>&#xa9; 2023 Developed by Ayush Goel</div>
                <div><a href="#">Privacy</a></div>
                <div><a href="#">Terms of Use</a></div>
                <div><a href="#">Site Map</a></div>
            </div>
    </div>
</div>
</div>

    );
}

export default Landing;