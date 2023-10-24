import React from 'react'
import { Link } from 'react-router-dom'

export const Sec6 = () => {
  return (
    // <div className="sec-6">

    //         <div className="sec6-upper">
    //             <h1>Our Recent Work</h1>
    //             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, velit! Velit neque cupiditate in optio facilis unde sapiente voluptates excepturi maxime eaque incidunt, laudantium doloribus soluta nulla aliquam, ad qui eligendi ratione! Dicta et similique animi aut expedita ad repellat accusantium, porro quaerat ducimus tenetur sapiente voluptas sint provident possimus.</p>

    //             <div className="sec-2-inner">
    //                 <div>Web Design</div>
    //                 <div>Mobile App</div>
    //                 <div>Branding</div>
    //                 <div><button className="branding">Branding</button></div>
    //             </div>
    //         </div>

    //         <div className="sec6-lower">
    //             <div className="r1">
    //                 <img src={require("./images/grid-1.png")} alt=""></img>
    //                 <img src={require("./images/grid-2.png")} alt=""></img>
    //                 <img src={require("./images/grid-3.png")} alt=""></img>
    //             </div>
    //             <div className="r2">
    //                 <img src={require("./images/grid-4.png")} alt=""></img>
    //                 <img src={require("./images/grid-5.png")} alt=""></img>
    //                 <img src={require("./images/grid-6.png")} alt=""></img>
    //             </div>
    //             <div className="r3">
    //                 <img src={require("./images/grid-7.png")} alt=""></img>
    //                 <img src={require("./images/grid-8.png")} alt=""></img>
    //                 <img src={require("./images/grid-9.png")} alt=""></img>
    //             </div>
    //             <div>
    //                 <button className="sec6-btn sec5-btn"><a href="#">Read More</a></button>
    //             </div>
    //         </div>

    //     </div>


    <div>

        <div className="sec-9" id="faq">
            <div className="sec9-upper">
                <div><h1 className="sec9-main">Need Help?</h1></div>
                <div><h2 className="sec9-sub">Don't Forget to Contact With Us</h2></div>
                <div><p className="sec9-para">We're just a message away! Feel free to reach out to us with any questions or inquiries.Have a query or need assistance? Contact us our dedicated team is here to help.</p></div>
            </div>
            <div className="sec9-lower">
                <form action="" className="sec9-form">
                    <div><input type="text" name="name" id="name" placeholder="Name" required></input></div>
                    <div><input type="email" name="email" id="email" placeholder="Email" required></input></div>
                    <div><button className="sec-9-btn"> <Link to="/Home">SUBMIT</Link> </button></div>
                </form>
            </div>
        </div>


    <div className="sec-10" id="contact">
        <div className="sec-10-link">
        
        <div><a href="https://www.facebook.com/" className="style" target="_blank">Facebook</a></div>
        <div><a href="https://developer.twitter.com/en/docs/authentication/guides/log-in-with-twitter" className="style" target="_blank">Twitter</a></div>
        <div><a href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&trk=login_reg_redirect" className="style" target="_blank">Linkedin</a></div>
        <div><a href="https://www.instagram.com/accounts/login/" className="style" target="_blank">Instagram</a></div>
        <div><a href="#" className="last">Behance</a></div>
        </div>
    
    </div>

</div>
)}