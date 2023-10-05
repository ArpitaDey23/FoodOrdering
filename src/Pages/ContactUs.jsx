import React from "react";
import "../Styles/contactus.css";
import {useNavigate } from "react-router-dom";

const CantactUs =()=>{

   const navigate = useNavigate()
    const handleSubmit =()=>{
        navigate("/home")
    }
    return(
        <>
         <section id="section-wrapper">
        <div className="box-wrapper">
            <div className="info-wrap">
                <h2 className="info-title">Contact Information</h2>
                <ul className="info-details">
                    <li>
                        <i className="fas fa-phone-alt"></i>
                        <span>Phone:</span> <a href="##">+321 456 987</a>
                    </li>
                    <li>
                        <i className="fas fa-paper-plane"></i>
                        <span>Email:</span> <a href="arpitaeco6@gmail.com">arpitaeco6@gmail.com</a>
                    </li>
                    <li>
                        <i className="fas fa-globe"></i>
                        <span>Website:</span> <a href="/home">foodness.com</a>
                    </li>
                </ul>
                <ul className="social-icons">
                    <li><a href="https://www.facebook.com/help/188157731232424"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            <div className="form-wrap">
                <form action="#" method="POST">
                    <h2 className="form-title">Send us a message</h2>
                    <div className="form-fields">
                         <div className="form-group">
                            <input type="text" className="fname" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="email" placeholder="Mail"/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="phone" placeholder="Phone"/>
                        </div> 
                        <div className="form-group">
                            <textarea name="message"  placeholder="Write your message"></textarea>
                        </div>
                    </div>
                    <button className="submit-button" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    </section>
        </>
    )
}
export default CantactUs;