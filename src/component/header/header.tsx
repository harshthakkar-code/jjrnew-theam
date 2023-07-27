import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const Navigate = useNavigate();

    const [mobileMenu,setMobileMenu]=useState(false);
    return (
        <div>
            {/* <div className="preloader-activate preloader-active open_tm_preloader">
                <div className="preloader-area-wrap">
                    <div className="spinner d-flex justify-content-center align-items-center h-100">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            </div> */}
            <div className="header-bottom-wrap header-sticky">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header default-menu-style position-relative">

                            {/* <!-- brand logo --> */}
                            <div className="header__logo" onClick={()=> Navigate('/')}>
                                <a>
                                    <img src="assets/images/logo/logo-dark.webp" aria-label="Mitech Logo" width="160" height="48" className="img-fluid" alt="" />
                                </a>
                            </div>

                            {/* <!-- header midle box  --> */}
                            <div className="header-midle-box">
                                <div className="header-bottom-wrap d-md-block d-none">
                                    <div className="header-bottom-inner">
                                        <div className="header-bottom-left-wrap">
                                            {/* <!-- navigation menu --> */}
                                            <div className="header__navigation d-none d-xl-block">
                                                <nav className="navigation-menu primary--menu">

                                                    <ul>
                                                        <li className="has-children has-children--multilevel-submenu">
                                                            <a  ><span>Home</span></a>
                                                            <ul className="submenu">
                                                                <li onClick={()=> Navigate('/soft&tech')}><a><span>Software & Techology</span></a></li>
                                                                <li onClick={()=> Navigate('/startup')}><a><span>Startup Business</span></a></li>
                                                                <li onClick={()=> Navigate('/itagency')}><a><span>IT Agency</span></a></li>
                                                                <li onClick={()=> Navigate('/itservice')}><a><span>IT Services</span></a></li>
                                                                <li onClick={()=> Navigate('/itsolution')}><a><span>IT Solution</span></a></li>
                                                                <li onClick={()=> Navigate('/cybersecurity')}><a><span>Cyber Security</span></a></li>
                                                                <li onClick={()=> Navigate('/moderncompany')}><a><span>Modern IT Company</span></a></li>
                                                                <li onClick={()=> Navigate('/machinelerning')}><a><span>Machine Learning</span></a></li>
                                                                <li onClick={()=> Navigate('/softinovation')}><a><span>Software Innovation</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="has-children has-children--multilevel-submenu">
                                                            <a  ><span>Company</span></a>
                                                            <ul className="submenu">
                                                                <li className="has-children">
                                                                    <a href="about-us-01.html"><span>About us</span></a>
                                                                    <ul className="submenu">
                                                                        <li><a href="about-us-01.html"><span>About us 01</span></a></li>
                                                                        <li  onClick={()=> Navigate('/about')}><a ><span>About us 02</span></a></li>
                                                                        <li className="has-children">
                                                                            <a  ><span>Submenu Level Two</span></a>
                                                                            <ul className="submenu">
                                                                                <li><a  ><span>Submenu Level Three</span></a></li>
                                                                                <li><a  ><span>Submenu Level Three</span></a></li>
                                                                                <li><a  ><span>Submenu Level Three</span></a></li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                
                                                                <li onClick={()=> Navigate('/contactus')}><a><span>Contact us</span></a></li>
                                                                <li onClick={()=> Navigate('/leadership')}><a><span>Leadership</span></a></li>
                                                                <li onClick={()=> Navigate('/whychooseus')}><a><span>Why choose us</span></a></li>
                                                                {/* <li><a href="our-history.html"><span>Our history</span></a></li> */}
                                                                {/* <li><a href="faqs.html"><span>FAQs</span></a></li> */}
                                                                <li onClick={()=> Navigate('/careers')}><a><span>Careers</span></a></li>
                                                                {/* <li><a href="pricing-plans.html"><span>Pricing plans</span></a></li> */}
                                                            </ul>
                                                        </li>
                                                        <li className="has-children has-children--multilevel-submenu">
                                                            <a  ><span>IT solutions</span></a>
                                                            <ul className="submenu">
                                                                <li onClick={()=> Navigate('/itservice')}><a><span>IT Services</span></a></li>
                                                                <li onClick={()=> Navigate('/manageitservice')}><a><span>Managed IT Services</span></a></li>
                                                                <li onClick={()=> Navigate('/industries')}><a><span>Industries</span></a></li>
                                                                <li onClick={()=> Navigate('/businesssolution')}><a><span>Business solution</span></a></li>
                                                                {/* <li><a href="it-services-details.html"><span>IT Services Details</span></a></li> */}
                                                            </ul>
                                                        </li>
                                                        {/* <li className="has-children">
                                                            <a  ><span>Elements</span></a>
                                                            {/* <!-- mega menu --> */}
                                                            {/* <ul className="megamenu megamenu--mega">
                                                                <li>
                                                                    <h2 className="page-list-title">ELEMENT GROUP 01</h2>
                                                                    <ul>
                                                                        <li><a href="element-accordion.html"><span>Accordions & Toggles</span></a></li>
                                                                        <li><a href="element-box-icon.html"><span>Box Icon</span></a></li>
                                                                        <li><a href="element-box-image.html"><span>Box Image</span></a></li>
                                                                        <li><a href="element-box-large-image.html"><span>Box Large Image</span></a></li>
                                                                        <li><a href="element-buttons.html"><span>Buttons</span></a></li>
                                                                        <li><a href="element-cta.html"><span>Call to action</span></a></li>
                                                                        <li><a href="element-client-logo.html"><span>Client Logo</span></a></li>
                                                                        <li><a href="element-countdown.html"><span>Countdown</span></a></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <h2 className="page-list-title">ELEMENT GROUP 02</h2>
                                                                    <ul>
                                                                        <li><a href="element-counters.html"><span>Counters</span></a></li>
                                                                        <li><a href="element-dividers.html"><span>Dividers</span></a></li>
                                                                        <li><a href="element-flexible-image-slider.html"><span>Flexible image slider</span></a></li>
                                                                        <li><a href="element-google-map.html"><span>Google Map</span></a></li>
                                                                        <li><a href="element-gradation.html"><span>Gradation</span></a></li>
                                                                        <li><a href="element-instagram.html"><span>Instagram</span></a></li>
                                                                        <li><a href="element-lists.html"><span>Lists</span></a></li>
                                                                        <li><a href="element-message-box.html"><span>Message box</span></a></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <h2 className="page-list-title">ELEMENT GROUP 03</h2>
                                                                    <ul>
                                                                        <li><a href="element-popup-video.html"><span>Popup Video</span></a></li>
                                                                        <li><a href="element-pricing-box.html"><span>Pricing Box</span></a></li>
                                                                        <li><a href="element-progress-bar.html"><span>Progress Bar</span></a></li>
                                                                        <li><a href="element-progress-circle.html"><span>Progress Circle</span></a></li>
                                                                        <li><a href="element-rows-columns.html"><span>Rows & Columns</span></a></li>
                                                                        <li><a href="element-social-networks.html"><span>Social Networks</span></a></li>
                                                                        <li><a href="element-tabs.html"><span>Tabs</span></a></li>
                                                                        <li><a href="element-team-member.html"><span>Team member</span></a></li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <h2 className="page-list-title">ELEMENT GROUP 04</h2>
                                                                    <ul>
                                                                        <li><a href="element-testimonials.html"><span>Testimonials</span></a></li>
                                                                        <li><a href="element-timeline.html"><span>Timeline</span></a></li>
                                                                        <li><a href="element-carousel-sliders.html"><span>Carousel Sliders</span></a></li>
                                                                        <li><a href="element-typed-text.html"><span>Typed Text</span></a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul> */}
                                                
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* <!-- header right box --> */}
                            <div className="header-right-box">
                                <div className="header-right-inner" id="hidden-icon-wrapper">

                                    {/* <!-- language-menu --> */}
                                    {/* <div className="language-menu">
                                        <ul>
                                            <li>
                                                <a   className="">
                                                    <img className="ls-flag" src="assets/images/flags/en.webp" alt="en" title="English" />
                                                    <span className="wpml-ls-native">English</span>
                                                </a>

                                                <ul className="ls-sub-menu">
                                                    <li className="">
                                                        <a   className="">
                                                            <img className="ls-flag" src="assets/images/flags/fr.webp" alt="en" title="Français" /><span className="wpml-ls-native">Français</span>
                                                        </a>
                                                    </li>
                                                    <li className="">
                                                        <a   className="">
                                                            <img className="wpml-ls-flag" src="assets/images/flags/de.webp" alt="de" title="Deutsch" /><span className="wpml-ls-native">Deutsch</span>
                                                        </a>
                                                    </li>

                                                </ul>

                                            </li>

                                        </ul>
                                    </div> */}

                                    {/* <!-- header-search-form --> */}
                                    {/* <div className="header-search-form default-search">
                                        <form action="#" className="search-form-top">
                                            <input className="search-field" type="text" placeholder="Search…" />
                                            <button className="search-submit">
                                                <i className="search-btn-icon fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div> */}
                                </div>

                                {/* <!-- mobile menu --> */}
                                <div className="mobile-navigation-icon d-block d-xl-none" onClick={()=> {setMobileMenu(true)}} id="mobile-menu-trigger">
                                    <i></i>
                                </div>
                                {/* hidden icons menu  */}
                                <div className="hidden-icons-menu d-block d-md-none" id="hidden-icon-trigger">
                                    <a href="javascript:void(0)">
                                        <i className="far fa-ellipsis-h-alt"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        
            {/* <!--====================  mobile menu overlay ====================--> */}
    <div className={mobileMenu ?"mobile-menu-overlay active":'mobile-menu-overlay'} id="mobile-menu-overlay">
        <div className="mobile-menu-overlay__inner">
            <div className="mobile-menu-overlay__header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-8">
                            {/* <!-- logo --> */}
                            <div className="logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/logo-dark.webp" className="img-fluid" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-4">
                            {/* <!-- mobile menu content --> */}
                            <div className="mobile-menu-content text-end">
                                <span className="mobile-navigation-close-icon" onClick={()=>{setMobileMenu(false)}} id="mobile-menu-close-trigger"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-menu-overlay__body">
                <nav className="offcanvas-navigation">
                    <ul>
                        <li className="has-children">
                            <a href="index.html">Home</a>
                            <ul className="sub-menu">
                                <li><a href="index-infotechno.html"><span>Infotechno</span></a></li>
                                <li><a href="index-processing.html"><span>Processing</span></a></li>
                                <li><a href="index-appointment.html"><span>Appointment</span></a></li>
                                <li><a href="index-services.html"><span>Services</span></a></li>
                                <li><a href="index-resolutions.html"><span>Resolutions</span></a></li>
                                <li><a href="index-cybersecurity.html"><span>cybersecurity</span></a></li>
                                <li><a href="index-modern-it-company.html"><span>Modern IT Company</span></a></li>
                                <li><a href="index-machine-learning.html"><span>Machine Learning</span></a></li>
                                <li><a href="index-software-innovation.html"><span>Software Innovation</span></a></li>
                            </ul>
                        </li>
                        <li className="has-children">
                            <a  >Company</a>
                            <ul className="sub-menu">
                                <li className="has-children">
                                    <a href="about-us-01.html"><span>About us</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="about-us-01.html"><span>About us 01</span></a></li>
                                        	
                                        <li onClick={()=> Navigate('/about')}><a><span>About us 02</span></a></li>
                                        <li className="has-children">
                                            <a  ><span>Submenu Level Two</span></a>
                                            <ul className="sub-menu">
                                                <li><a  ><span>Submenu Level Three</span></a></li>
                                                <li><a  ><span>Submenu Level Three</span></a></li>
                                                <li><a  ><span>Submenu Level Three</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="contact-us.html"><span>Contact us</span></a></li>
                                <li><a href="leadership.html"><span>Leadership</span></a></li>
                                <li><a href="why-choose-us.html"><span>Why choose us</span></a></li>
                                <li><a href="our-history.html"><span>Our history</span></a></li>
                                <li><a href="faqs.html"><span>FAQs</span></a></li>
                                <li><a href="careers.html"><span>Careers</span></a></li>
                                <li><a href="pricing-plans.html"><span>Pricing plans</span></a></li>
                            </ul>
                        </li>
                        <li className="has-children">
                            <a  >IT solutions</a>
                            <ul className="sub-menu">
                                <li><a href="it-services.html"><span>IT Services</span></a></li>
                                <li><a href="managed-it-service.html"><span>Managed IT Services</span></a></li>
                                <li><a href="industries.html"><span>Industries</span></a></li>
                                <li><a href="business-solution.html"><span>Business solution</span></a></li>
                                <li><a href="it-services-details.html"><span>IT Services Details</span></a></li>
                            </ul>
                        </li>
                        <li className="has-children">
                            <a  >Elements</a>
                            <ul className="sub-menu">
                                <li className="has-children">
                                    <a  >Element Group 01</a>
                                    <ul className="sub-menu">
                                        <li><a href="element-accordion.html"><span>Accordions & Toggles</span></a></li>
                                        <li><a href="element-box-icon.html"><span>Box Icon</span></a></li>
                                        <li><a href="element-box-image.html"><span>Box Image</span></a></li>
                                        <li><a href="element-box-large-image.html"><span>Box Large Image</span></a></li>
                                        <li><a href="element-buttons.html"><span>Buttons</span></a></li>
                                        <li><a href="element-cta.html"><span>Call to action</span></a></li>
                                        <li><a href="element-client-logo.html"><span>Client Logo</span></a></li>
                                        <li><a href="element-countdown.html"><span>Countdown</span></a></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a  >Element Group 02</a>
                                    <ul className="sub-menu">
                                        <li><a href="element-counters.html"><span>Counters</span></a></li>
                                        <li><a href="element-dividers.html"><span>Dividers</span></a></li>
                                        <li><a href="element-flexible-image-slider.html"><span>Flexible image slider</span></a></li>
                                        <li><a href="element-google-map.html"><span>Google Map</span></a></li>
                                        <li><a href="element-gradation.html"><span>Gradation</span></a></li>
                                        <li><a href="element-instagram.html"><span>Instagram</span></a></li>
                                        <li><a href="element-lists.html"><span>Lists</span></a></li>
                                        <li><a href="element-message-box.html"><span>Message box</span></a></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a  >Element Group 03</a>
                                    <ul className="sub-menu">
                                        <li><a href="element-popup-video.html"><span>Popup Video</span></a></li>
                                        <li><a href="element-pricing-box.html"><span>Pricing Box</span></a></li>
                                        <li><a href="element-progress-bar.html"><span>Progress Bar</span></a></li>
                                        <li><a href="element-progress-circle.html"><span>Progress Circle</span></a></li>
                                        <li><a href="element-rows-columns.html"><span>Rows & Columns</span></a></li>
                                        <li><a href="element-social-networks.html"><span>Social Networks</span></a></li>
                                        <li><a href="element-tabs.html"><span>Tabs</span></a></li>
                                        <li><a href="element-team-member.html"><span>Team member</span></a></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a  >Element Group 04</a>
                                    <ul className="sub-menu">
                                        <li><a href="element-testimonials.html"><span>Testimonials</span></a></li>
                                        <li><a href="element-timeline.html"><span>Timeline</span></a></li>
                                        <li><a href="element-carousel-sliders.html"><span>Carousel Sliders</span></a></li>
                                        <li><a href="element-typed-text.html"><span>Typed Text</span></a></li>
                                    </ul>
                                </li>

                            </ul>
                        </li>
                        {/* <li className="has-children">
                            <a href="javascript:void(0)">Case Studies</a>
                            <ul className="sub-menu">
                                <li><a href="case-studies.html"><span>Case Studies 01</span></a></li>
                                <li><a href="case-studies-02.html"><span>Case Studies 02</span></a></li>
                                <li><a href="single-smart-vision.html"><span>Single Layout</span></a></li>
                            </ul>
                        </li>
                        <li className="has-children">
                            <a href="javascript:void(0)">Blogs</a>
                            <ul className="sub-menu">
                                <li><a href="blog-list-large-image.html"><span>List Large Image</span></a></li>
                                <li><a href="blog-list-left-large-image.html"><span>Left Large Image</span></a></li>
                                <li><a href="blog-grid-classic.html"><span>Grid Classic</span></a></li>
                                <li><a href="blog-grid-masonry.html"><span>Grid Masonry</span></a></li>
                                <li className="has-children">
                                    <a href="blog-post-layout-one.html"><span>Single Layouts</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="blog-post-layout-one.html"><span>Left Sidebar</span></a></li>
                                        <li><a href="blog-post-right-sidebar.html"><span>Right Sidebar</span></a></li>
                                        <li><a href="blog-post-no-sidebar.html"><span>No Sidebar</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    {/* <!--====================  End of mobile menu overlay  ====================--> */}
        </div>
        </div>
    )
}

export default Header;