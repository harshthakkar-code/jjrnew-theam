import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Footer: React.FC = () => {
    const Navigate = useNavigate();

    return ( 
        
    <div className="footer-area-wrapper bg-gray">
    <div className="footer-area section-space--ptb_80">
        <div className="container">
            <div className="row footer-widget-wrapper">
                <div className="col-lg-3 col-md-6 col-sm-6 footer-widget">
                    <div className="footer-widget__logo mb-30">
                        <img src="assets/images/logo/dark-logo-160x48.webp" width="160" height="48" className="img-fluid" alt=""/>
                    </div>
                    <ul className="footer-widget__list">
                        <li>Ahmedabad, Gujarat</li>
                        <li><a href="mailto:admin@jjrsoftware.com" className="hover-style-link">admin@jjrsoftware.com</a></li>
                        <li><a href="tel:123344556" className="hover-style-link text-black font-weight--bold">(+91) 72838 87707</a></li>
                        <li><a href="https://hasthemes.com/" className="hover-style-link text-color-primary">www.jjrsofttware.com</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-5 col-sm-6 footer-widget">
                    <h6 className="footer-widget__title mb-20">IT Services</h6>
                    <ul className="footer-widget__list">
                        <li><a>Technology Consulting</a></li>
                        <li><a>Custom SaaS Solutions</a></li>
                        <li><a>Product Development Lifecycle</a></li>
                        <li><a>Software Engineering</a></li>
                        <li><a>NOC Services</a></li>
                        <li><a>R&D Services</a></li>
                    </ul>
                </div>
                 <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
                    <h6 className="footer-widget__title mb-20">Sales inquiries</h6>
                    <ul className="footer-widget__list">
                        <li><a>sales@jjrsofttware.com</a></li>
                        <li><a>(+91) 9714 863 712</a></li>
                        <li><a>info@jjrsofttware.com</a></li>
                        <li><a>(+91) 7283 8877 07</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 footer-widget">
                    <h6 className="footer-widget__title mb-20">Support</h6>
                    <ul className="footer-widget__list">
                        <li><a>Forum Support</a></li>
                        <li><a>Help & FAQ</a></li>
                        <li onClick={()=> Navigate('/contactus')}><a >Contact Us</a></li>
                        <li><a>Pricing and plans</a></li>
                        <li><a>Cookies Policy</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                    {/* <div className="footer-widget__title section-space--mb_50"></div>
                    <ul className="footer-widget__list">
                        <li><a   className="image_btn" aria-label="Google play Button"><img className="img-fluid" src="assets/images/icons/aeroland-button-google-play.webp" alt=""/></a></li>
                        <li><a   className="image_btn" aria-label="App Store Button"><img className="img-fluid" src="assets/images/icons/aeroland-button-app-store.webp" alt=""/></a></li>
                    </ul> */}
                </div>
            </div>
        </div>
    </div>
    <div className="footer-copyright-area section-space--pb_30">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                    <span className="copyright-text">&copy; 2023 JJR Software. <a href="https://hasthemes.com/">All Rights Reserved.</a></span>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <ul className="list ht-social-networks solid-rounded-icon">

                        <li className="item">
                            <a href="https://twitter.com/JjrSoftware" target="_blank" aria-label="Twitter" className="social-link ">
                                <i className="fab fa-twitter link-icon"></i>
                            </a>
                        </li>
                        <li className="item">
                            <a href="https://www.facebook.com/jjrsoftware" target="_blank" aria-label="Facebook" className="social-link">
                                <i className="fab fa-facebook-f link-icon"></i>
                            </a>
                        </li>
                        <li className="item">
                            <a href="https://www.instagram.com/jjrsoftware/" target="_blank" aria-label="Instagram" className="social-link">
                                <i className="fab fa-instagram link-icon"></i>
                            </a>
                        </li>
                        <li className="item">
                            <a href="https://www.linkedin.com/company/jjrsoftware" target="_blank" aria-label="Linkedin" className="social-link">
                                <i className="fab fa-linkedin link-icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
)}
   
        


export default Footer;