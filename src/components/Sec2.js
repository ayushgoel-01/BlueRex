import React from 'react'
import { Link } from 'react-router-dom'

export const Sec2 = () => {
  return (

    <div>

    <div className="sec-2" id="about">

            <div className="sec-2-left">

                <div><h2 className="sec-2-sub">Dream Big Inspire the World</h2></div>
                <div><h2 className="sec-2-main">We turn creative ideas into your business.</h2></div>
                <div className="sec-2-inner">
                    <div>Web Design</div>
                    <div>Mobile App</div>
                    <div>Branding</div>
                    <div><button className="branding">Branding</button></div>
                </div>

                <div className="sec-2-para">
                    <p>At the heart of innovation lies the transformative power of human imagination. We are the architects of possibility, the dreamers of the improbable, and the fearless visionaries who turn ideas into reality with unwavering determination anscreativity. </p>
                </div>

                <div className="sec-2-lower">
                    <a href=""><button> <Link to="/Review">Read More</Link> </button></a>
                </div>

            </div>

            <div className="sec-2-right">
                <img src={require("./images/watch-3.png")} alt=""></img>
            </div>

        </div>


<div className="sec-3" id="feature">
<div className="sec-3-1">
    <img src={require("./images/Horn-Shape.png" )}alt="" className="sec3-img"></img>
    <h2 className="sec3-h1">500+</h2>
    <h2 className="sec3-h2">Sucessfully<br/>Completed Projects</h2>
    <p className="sec3-para">Successfully completed projects are the culmination of dedication, hard work, and unwavering commitment to excellence</p>
</div>

<div className="sec-3-2">
    <img src={require("./images/Horn-Shape.png")} alt="" className="sec3-img"></img>
    <h2 className="sec3-h1">254+</h2>
    <h2 className="sec3-h2">Highly specialised<br/>employees</h2>
    <p className="sec3-para">Specialized employees are the go-to resources for intricate tasks, providing invaluable insights and guidance</p>
</div>
<div className="sec-3-3">
    <img src={require("./images/Horn-Shape.png")} alt="" className="sec3-img"></img>
    <h2 className="sec3-h1">45+</h2>
    <h2 className="sec3-h2">Awards<br/>around the world</h2>
    <p className="sec3-para">Awards around the world celebrate excellence and acknowledge outstanding achievements in various fields</p>
</div>
</div>


</div>
  )
}
