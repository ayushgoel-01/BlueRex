import React from 'react'

export const Sec9 = () => {
  return (
    <div className="sec-9" id="faq">
            <div className="sec9-upper">
                <div><h1 className="sec9-main">Need Help?</h1></div>
                <div><h2 className="sec9-sub">Don't Forget to Contact With Us</h2></div>
                <div><p className="sec9-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur itaque suscipit blanditiis repudiandae quas ducimus officiis obcaecati quam excepturi.</p></div>
            </div>
            <div className="sec9-lower">
                <form action="" className="sec9-form">
                    <div><input type="text" name="name" id="name" placeholder="Name" required></input></div>
                    <div><input type="email" name="email" id="email" placeholder="Email" required></input></div>
                    <div><button className="sec-9-btn"> <a href="#">SUBMIT</a> </button></div>
                </form>
            </div>
        </div>

  )
}
