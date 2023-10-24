import React from 'react'

export const Sec8 = () => {
  return (
    <div className="sec-8" id="review">
            <div className="sec8-left">
                <div><h2 className="sec8-sub">Our Happy Client</h2></div>
                <div><h2 className="sec8-main">Testimonials</h2></div>
    
                <p className="sec-8-para"> <img src={require("./images/“.png")} alt="" className="sec8-icon"></img> Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum id dolores tempore iure iquid quis ipsum veniam quae tenetur iste culpa suscipit tempora magnam impedit at illum eum ea, nulla, nam porro, sequi provident iusto.</p>

                <div className="sec-8-stars">
                    <img src={require("./images/stars.png")} alt=""></img>
                <h3>Mr. John Doe</h3>
                </div>

            </div>
            <div className="sec8-right">
                <img src={require("./images/Client Image.png")} alt=""></img>
            </div>
        </div>

  )
}
