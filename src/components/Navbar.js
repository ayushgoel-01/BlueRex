import React from "react";
import './Navbar.css';
import { useState } from "react";
function Navbar(){
    const [isActive,setIsActive]=useState(false);
    return(
        <nav class="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
            {/* <i class="fas fa-bars"></i> */}
            <img src={require("./images/Ham-burger.png")} alt="" className="Ham-burger" onClick={()=>setIsActive((current)=>!current
                )}></img>
        </span>
        <div className="logo">
                    <img src={require('./images/logo.png')} alt=""></img>
                    <div className="p">BlueRex</div>
        </div>

        <ul className={isActive ? "main-nav active" : "main-nav"} id="js-menu">
            <li>
                <a href="#Home" class="nav-links">Home</a>
            </li>
            <li>
                <a href="#about" class="nav-links">About</a>
            </li>
            <li>
                <a href="#features" class="nav-links">Features</a>
            </li>
            <li>
                <a href="#products" class="nav-links">Products</a>
            </li>
            <li>
                <a href="#reviews" class="nav-links">Reviews</a>
            </li>
            <li>
                <a href="#faq" class="nav-links">Faq</a>
            </li>
            <li>
                <a href="#contact" class="nav-links">Contact</a>
            </li>
        </ul>
    </nav>
    );
}

export default Navbar;