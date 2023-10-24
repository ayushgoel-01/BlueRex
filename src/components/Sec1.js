import React, { useState } from 'react'
import { Route, Routes  } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';

export const Sec1 = () => {

    const [isActive,setIsActive]=useState(false);

  return (

    <div className="sec-1">

        {/* <Outlet/> */}
            
            
            {/* <div className="navbar">
                <div className="logo">
                    <img src={require('./images/logo.png')} alt=""></img>
                    <div className="p">BlueRex</div>
                </div>


             <ul className="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#feature">Features</a></li>
                <li><a href="#product">Product</a></li>
                <li><a href="#review">Reviews</a></li>
                <li><a href="#faq">Faq</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#"><img src={require("./images/Ham-burger.png")} alt="" className="Ham-burger"></img></a></li>
            </ul> 
            </div> */}

            


            <div className="info">
                <div className="info-left">
                    <div><h2 className="sub-heading">We are best and creative agency</h2></div>
                <div><h2 className="heading">We turn creative ideas
                    into your business.</h2></div>
                    <div><h3>We have created a great platform for your growth,so join with us immediately
                        for massive growth.</h3></div>

                    <div className="btn-grp">
                        <button className="b1"><a href="#product">Our Story</a></button>
                        <button className="b2"><a href="#review">Read More</a></button>
                    </div>
                </div>

                <div className="info-right">
                    <div><img src={require("./images/man.png")} alt=""></img></div>
                </div>
                
                    
            </div>


        </div>
  )
}
