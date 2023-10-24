import React from 'react'

export const Sec4 = () => {
  return (
    // <div className="sec-4">
    //         <div className="sec-4-sub"><h2>Let's Grow Together</h2></div>
    //         <div className="sec-4-main"><h2>We turn creative ideas into your business.</h2></div>
    //         <div className="sec-4-para"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit excepturi ipsa quisquam in corrupti maxime, nobis amet dolorum aspernatur atque earum incidunt maiores doloribus dicta, ea alias inventore natus iste</p></div>
    //         <div>
    //             <button className="sec-4-btn"><a href="#">Read More</a></button>
    //         </div>
    //     </div>


    <div className="sec-6">

            <div className="sec6-upper">
                <h1>Our Recent Work</h1>
                <p>Our products are a testament to our unwavering commitment to quality and innovation.Crafted with precision and care, each product embodies our dedication to excellence.
                Our product range is designed to meet the diverse needs and preferences of our valued customers.We take pride in the durability and reliability of our products, ensuring they stand the test of time.</p>

                <div className="sec-2-inner">
                    <div>Web Design</div>
                    <div>Mobile App</div>
                    <div>Branding</div>
                    <div><button className="branding">Branding</button></div>
                </div>
            </div>

            <div className="sec6-lower">
                <div className="r1">
                    <img src={require("./images/grid-1.png")} alt=""></img>
                    <img src={require("./images/grid-2.png")} alt=""></img>
                    <img src={require("./images/grid-3.png")} alt=""></img>
                </div>
                <div className="r2">
                    <img src={require("./images/grid-4.png")} alt=""></img>
                    <img src={require("./images/grid-5.png")} alt=""></img>
                    <img src={require("./images/grid-6.png")} alt=""></img>
                </div>
                <div className="r3">
                    <img src={require("./images/grid-7.png")} alt=""></img>
                    <img src={require("./images/grid-8.png")} alt=""></img>
                    <img src={require("./images/grid-9.png")} alt=""></img>
                </div>
                <div>
                    <button className="sec6-btn sec5-btn"><a href="#">Read More</a></button>
                </div>
            </div>

        </div>
  )
}
