import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Softinovation: React.FC = () => { 
    const Navigate = useNavigate();
    return( 
        
            <div id="main-wrapper">
        <div className="site-wrapper-reveal">

            {/* <!--============ Software Innovation Hero Start ============--> */}
            <div className="software-innovation-hero-wrapper section-space--pt_80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="software-innovation-hero-wrap wow move-up">
                                <div className="software-innovation-hero-text">
                                    <p className="sub-heading">Find your solution</p>
                                    <h3>Best choice for your</h3>
                                    <h1 className="font-weight--reguler mb-30">Startup. </h1>
                                    <h6 className="info-heading">The full set of services around development and maintenance <br/> of complex business-critical applications.</h6>
                                    <div className="hero-button  mt-30">
                                        <a  className="ht-btn ht-btn-md">Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="software-innovation-hero-image animation_images three mt-30">
                                <img src="assets/images/hero/soft-01.webp" className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--============ Software Innovation Hero End ============--> */}

            {/* <!--===========  Projects wrapper Start =============--> */}
            <div className="projects-wrapper section-space--ptb_100">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <div className="projects-wrap">

                                <div className="row">

                                    <div className="col-lg-4 col-md-6">
                                        {/* <!-- Projects Wrap Start --> */}
                                        <a  className="projects-wrap style-04 wow move-up">
                                            <div className="projects-image-box">
                                                <div className="projects-image">
                                                    <div className="image">
                                                        <img className="img-fluid" src="assets/images/icons/soft-s1-01-120x120.webp" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="content text-center">
                                                    <h5 className="heading">Business & Finance</h5>
                                                    <div className="text">Lorem dolor sit amet, consectetur elit. Suspeo sitea. spe ndisse suscipit sagittis leo sitea rem ipsum dolor sit
                                                    </div>
                                                    <div className="box-projects-arrow">
                                                    <a onClick={()=> Navigate('/contactus')} ><span className="button-text">Discover now</span></a>
                                                        <i className="fas fa-arrow-right ml-1"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        {/* <!-- Projects Wrap End --> */}
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        {/* <!-- Projects Wrap Start --> */}
                                        <a  className="projects-wrap style-04 wow move-up">
                                            <div className="projects-image-box">
                                                <div className="projects-image">
                                                    <div className="image">
                                                        <img className="img-fluid" src="assets/images/icons/soft-s1-02-120x120.webp" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="content text-center">
                                                    <h5 className="heading">Gaming & Enterteinment</h5>
                                                    <div className="text">Lorem dolor sit amet, consectetur elit. Suspeo sitea. spe ndisse suscipit sagittis leo sitea rem ipsum dolor sit
                                                    </div>
                                                    <div className="box-projects-arrow">
                                                    <a onClick={()=> Navigate('/contactus')} ><span className="button-text">Discover now</span></a>
                                                        <i className="fas fa-arrow-right ml-1"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        {/* <!-- Projects Wrap End --> */}
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        {/* <!-- Projects Wrap Start --> */}
                                        <a  className="projects-wrap style-04 wow move-up">
                                            <div className="projects-image-box">
                                                <div className="projects-image">
                                                    <div className="image">
                                                        <img className="img-fluid" src="assets/images/icons/soft-s1-03-120x120.webp" alt=""/>
                                                    </div>
                                                </div>
                                                <div className="content text-center">
                                                    <h5 className="heading">Information Technology</h5>
                                                    <div className="text">Lorem dolor sit amet, consectetur elit. Suspeo sitea. spe ndisse suscipit sagittis leo sitea rem ipsum dolor sit
                                                    </div>
                                                    <div className="box-projects-arrow">
                                                    <a onClick={()=> Navigate('/contactus')} ><span className="button-text">Discover now</span></a>
                                                        <i className="fas fa-arrow-right ml-1"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        {/* <!-- Projects Wrap End --> */}
                                    </div>
                                </div>
                            </div>

                            <div className="section-under-heading text-center section-space--mt_40">Stop wasting time and money on technology. <a onClick={()=> Navigate('/contactus')}>Let’s get started</a></div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!--===========  Projects wrapper End =============--> */}



            {/* <!--=========== About Company Area Start ==========--> */}
            <div className="software-innovation-about-company-area software-innovation-about-bg section-space--ptb_120">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-6">
                            <div className="image-inner-video-section">
                                <img className="img-fluid border-radus-5" src="assets/images/banners/soft-s2-01.webp" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 ms-auto mt-30">
                            <div className="machine-learning-about-content">
                                <div className="section-title mb-20">
                                    {/* <!-- section-title-wrap Start --> */}
                                    <div className="section-title-wrap text-left section-space--mb_30">
                                        <h6 className="section-sub-title mb-20">INDUSTRIES WE SERVE</h6>
                                        <h3 className="heading">For your very specific industry, we <span className="text-color-primary">have highly-tailored IT solutions.</span>
                                        </h3>
                                    </div>
                                    {/* <!-- section-title-wrap Start --> */}

                                    <p className="dec-text mt-20">Engitech is the partner of choice for many of the world’s leading enterprises, SMEs and technology challengers. We help businesses elevate their value through custom software development, product design, QA and consultancy services.</p>
                                    <div className="button-box mt-5">
                                        <div className="hero-button">
                                            {/* <div className="video-popup software-innovation-video-box">
                                                <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="single-popup-wrap video-link">
                                                    <div className="video-content">
                                                        <div className="ht-popup-video video-button">
                                                            <div className="video-button__two">
                                                                <div className="video-play">
                                                                    <span className="video-play-icon"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="video-text">
                                                            How we work
                                                        </div>
                                                    </div>
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--=========== About Company Area End ==========--> */}


            {/* <!--===========  feature-icon-wrapper  Start =============--> */}
            <div className="feature-icon-wrapper section-space--ptb_100">
                <div className="container">

                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <div className="section-title-wrap text-left section-space--mb_40">
                                <h6 className="section-sub-title mb-20">INDUSTRIES WE SERVE </h6>
                                <h3 className="heading">For your very specific industry, <br/>
                                we have <span className="text-color-primary"> highly-tailored IT solutions.</span></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="button--box text-left text-md-end">
                                <a onClick={()=> Navigate('/contactus')} className="ht-btn ht-btn-md">Talk to a consultant</a>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="feature-list__two">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                                        {/* <!-- ht-box-icon Start --> */}
                                        <div className="ht-box-images style-10">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <img className="img-fulid" src="assets/images/icons/soft-s3-01.webp" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Offshore Software Development</h5>
                                                    <div className="box-images-arrow">
                                                        
                                                        {/* <a onClick={()=> Navigate('/contactus')} ><span className="button-text">Discover now</span></a> */}
                                                            {/* <i className="fas fa-arrow-right"></i> */}
                                                       

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- ht-box-icon End --> */}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                                        {/* <!-- ht-box-icon Start --> */}
                                        <div className="ht-box-images style-10">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <img className="img-fulid" src="assets/images/icons/soft-s3-02.webp" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Custom Software Development</h5>
                                                    <div className="box-images-arrow">
                                                      
                                                        {/* <a onClick={()=> Navigate('/contactus')} ><span className="button-text">Discover now</span></a> */}
                                                            {/* <i className="fas fa-arrow-right"></i> */}
                                                       

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- ht-box-icon End --> */}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                                        {/* <!-- ht-box-icon Start --> */}
                                        <div className="ht-box-images style-10">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <img className="img-fulid" src="assets/images/icons/soft-s3-03.webp" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Software Outsourcing Services</h5>
                                                    <div className="box-images-arrow">
                                                        
                                                        {/* <a onClick={()=> Navigate('/contactus')} ><span className="button-text">Discover now</span></a> */}
                                                            {/* <i className="fas fa-arrow-right"></i> */}
                                                     

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- ht-box-icon End --> */}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                                        {/* <!-- ht-box-icon Start --> */}
                                        <div className="ht-box-images style-10">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <img className="img-fulid" src="assets/images/icons/soft-s3-04.webp" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Software Product Development</h5>
                                                    <div className="box-images-arrow">
                                                    
                                                        {/* <a onClick={()=> Navigate('/contactus')} ><span className="button-text">Discover now</span></a> */}
                                                            {/* <i className="fas fa-arrow-right"></i> */}
                                                      

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- ht-box-icon End --> */}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                                        {/* <!-- ht-box-icon Start --> */}
                                        <div className="ht-box-images style-10">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <img className="img-fulid" src="assets/images/icons/soft-s3-05.webp" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Web Development Services</h5>
                                                    <div className="box-images-arrow">
                                                       
                                                        {/* <a onClick={()=> Navigate('/contactus')} ><span className="button-text">Discover now</span></a> */}
                                                            {/* <i className="fas fa-arrow-right"></i> */}
                                                       

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- ht-box-icon End --> */}
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                                        {/* <!-- ht-box-icon Start --> */}
                                        <div className="ht-box-images style-10">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <img className="img-fulid" src="assets/images/icons/soft-s3-06.webp" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Cloud Migration Services</h5>
                                                    <div className="box-images-arrow">
                                                     
                                                        {/* <a onClick={()=> Navigate('/contactus')} ><span className="button-text">Discover now</span></a> */}
                                                            {/* <i className="fas fa-arrow-right"></i> */}
                                                       

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- ht-box-icon End --> */}
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                                        {/* <!-- ht-box-icon Start --> */}
                                        <div className="ht-box-images style-10">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <img className="img-fulid" src="assets/images/icons/soft-s3-07.webp" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">Mobile App Development</h5>
                                                    <div className="box-images-arrow">
                                                        
                                                        {/* <a onClick={()=> Navigate('/contactus')} ><span className="button-text">Discover now</span></a> */}
                                                            {/* <i className="fas fa-arrow-right"></i> */}
                                                        

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- ht-box-icon End --> */}
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 wow move-up">
                                        {/* <!-- ht-box-icon Start --> */}
                                        <div className="ht-box-images style-10">
                                            <div className="image-box-wrap">
                                                <div className="box-image">
                                                    <img className="img-fulid" src="assets/images/icons/soft-s3-08.webp" alt=""/>
                                                </div>
                                                <div className="content">
                                                    <h5 className="heading">UI/UX Design Teaching</h5>
                                                    <div className="box-images-arrow">
                                                        {/* <a onClick={()=> Navigate('/contactus')} ><span className="button-text">Discover now</span></a> */}
                                                            {/* <i className="fas fa-arrow-right"></i> */}
                                                
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- ht-box-icon End --> */}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!--===========  feature-icon-wrapper  End =============--> */}

            {/* <!--=========== fun fact Wrapper Start ==========--> */}
            <div className="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 wow move-up">
                            <div className="fun-fact--two text-center">
                                <div className="fun-fact__count counter">120</div>
                                <h6 className="fun-fact__text">Happy clients</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 wow move-up">
                            <div className="fun-fact--two text-center">
                                <div className="fun-fact__count counter">32</div>
                                <h6 className="fun-fact__text">Finished projects</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 wow move-up">
                            <div className="fun-fact--two text-center">
                                <div className="fun-fact__count counter">73</div>
                                <h6 className="fun-fact__text">Skilled Experts</h6>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 wow move-up">
                            <div className="fun-fact--two text-center">
                                <div className="fun-fact__count counter">318</div>
                                <h6 className="fun-fact__text">Media Posts</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--=========== fun fact Wrapper End ==========--> */}


            {/* <!--===========  Projects wrapper Start =============--> */}
           



            <div className="technology-service-area technology-service-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title section-space--pt_60">
                                <p className="text-white font-weight--bold">OUR TECHNOLOGY</p>
                                <h3 className="text-white"><span className="text-color-secondary">JJR</span> – Top Software
                                    Development Technology</h3>
                                <p className="text-infos text-white mt-30">Our strong passion to modern tech trends and best practices drive in the development of top-notch solutions that are perfectly tailored to provide high quality and affordable software outsourcing solutions to growing startup and enterprise companies in the world.</p>

                                <div className="single-button-group">
                                    <div className="button-group-wrap mt-30">
                                        <a className="ht-btn ht-btn-md ht-btn--outline">ASP. NET Core</a>
                                        <a  className="ht-btn ht-btn-md ht-btn--outline">REACT JS</a>
                                        <a  className="ht-btn ht-btn-md ht-btn--outline">ANGULAR</a>
                                        <a  className="ht-btn ht-btn-md ht-btn--outline">PHP</a>
                                        <a  className="ht-btn ht-btn-md ht-btn--outline">JAVA</a>
                                        <a  className="ht-btn ht-btn-md ht-btn--outline">PYTHON</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-image section-space--pt_60">
                                <img src="assets/images/banners/soft-s5-img.webp" className="img-fluid" alt="Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


           
            <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-7">
                            <div className="cta-content md-text-center">
                                <h3 className="heading text-white">We run all kinds of IT services that vow your <span className="text-color-secondary"> success</span></h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="cta-button-group--one text-center">
                                <a onClick={()=> Navigate('/contactus')} className="btn btn--white btn-one"><span className="btn-icon me-2"><i className="far fa-comment-alt"></i></span> Let's talk</a>
                                {/* <a  className="btn btn--secondary  btn-two"><span className="btn-icon me-2"><i className="fas fa-info-circle"></i></span> Get info</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
</div>
     )}

export default Softinovation;