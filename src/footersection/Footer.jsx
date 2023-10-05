import React from "react";
import "../Styles/footer.css"
 const Footer =()=>{
    return(
        <>
        <footer className="footer">
        <div className="container-footer">
            <div className="row">
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="/about">about-us</a></li>
                        <li><a href="/contact">contact-us</a></li>
                        <li><a href="/review">client-review</a></li>
                        <li><a href="/login">login</a></li>

                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact us</h4>
                    <ul>
                        <li><a href="#">help & support</a></li>
                        <li><a href="#">partner with us</a></li>
                        <li><a href="#">ride with us</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment option</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>We deliver to</h4>
                    <ul>
                        <li><a href="#">bangalore</a></li>
                        <li><a href="#">kolkata</a></li>
                        <li><a href="#">delhi</a></li>
                        <li><a href="#">pune</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>follow-us</h4>
                    <div className="social-links">
                        <a href="https://www.facebook.com/help/188157731232424"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/loginhttps://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    {/* <div className='navbar-footer'>
              <img 
                  style={{width: "100%", height: "100%",}}
                src="https://i.ibb.co/4jb6S3D/pngtree-food-logo-png-image-5687717.png"
/>
             </div> */}
                </div>
            </div>
        </div>
        </footer>
        </>
    )
 }
 export default Footer;