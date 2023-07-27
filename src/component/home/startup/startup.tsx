import React from "react";

const StartUp: React.FC = () => { 
    return(
    <div id="main-wrapper">
<div className="site-wrapper-reveal">
    {/* <!--============ Infotechno Hero Start ============--> */}
    <div className="processing-hero processing-hero-bg">
        <div className="container">
            <div className="row align-items-center">
                {/* <!--baseline--> */}
                <div className="col-lg-8 col-md-7">
                    <div className="processing-hero-text wow move-up">
                        <h6>IT Software and design </h6>
                        <h1 className="font-weight--reguler mb-15">Virtual technology in a <span className="text-color-secondary">Refined IT System</span></h1>
                        <p>Set the trends for desktop & server virtualization technology</p>
                        <div className="hero-button mt-30">
                            <a   className="btn btn--secondary">Free Sample</a>
                            <div className="hero-popup-video video-popup">
                                <a href="https://www.youtube.com/watch?v=vqZuSUtczbU" className="video-link">
                                    <div className="video-content">
                                        <div className="video-play">
                                            <span className="video-play-icon">
                                    <i className="fa fa-play"></i>
                                </span>
                                        </div>
                                        <div className="video-text"> How we work</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-5">
                    <div className="processing-hero-images-wrap wow move-up">
                        <div className="processing-hero-images">
                            <img className="img-fluid" src="assets/images/hero/slider-processing-slide-01-image-01.webp" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--============ Infotechno Hero End ============-->
    <!--====================  Accordion area ====================--> */}
    <div className="accordion-wrapper section-space--ptb_100">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="faq-wrapper faq-custom-col">

                        <div className="section-title section-space--mb_40">
                            <h6 className="section-sub-title mb-20">Our company</h6>
                            <h3 className="heading">Share the joy of achieving <span className="text-color-primary"> glorious moments</span> & climbed up the top.</h3>

                        </div>

                        <div id="accordion">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How can we help your business? <span> <i className="fas fa-chevron-down"></i>
                                    <i className="fas fa-chevron-up"></i> </span>
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                    <div className="card-body">
                                        <p>Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button className="btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What are the advantages of JJR Software?<span> <i className="fas fa-chevron-down"></i>
                                    <i className="fas fa-chevron-up"></i> </span>
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                    <div className="card-body">
                                        <p>JJR Software takes into consideration every little detail to make sure the system run smoothly and responsively. JJR Software employs a new technique called Minified Technology for securing customers' database & building up highly confidential firewalls. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h5 className="mb-0">
                                        <button className="btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How working process is simplified? <span> <i className="fas fa-chevron-down"></i>
                                    <i className="fas fa-chevron-up"></i> </span>
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                    <div className="card-body">
                                        <p>We reduce redundant complex calculations and lengthy erroneous code texts with simpler ones to ensure JJR Software would run seamlessly and the design is reserved in its best form when viewed from a wide range of mobile devices & browsers. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="rv-video-section">

                        <div className="ht-banner-01 ">
                            <img className="img-fluid border-radus-5 animation_images one wow fadeInDown" src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-02.webp" alt=""/>
                        </div>

                        <div className="ht-banner-02">
                            <img className="img-fluid border-radus-5 animation_images two wow fadeInDown" src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-03.webp" alt=""/>
                        </div>

                        <div className="main-video-box video-popup">
                            <a href="https://www.youtube.com/watch?v=9No-FiEInLA" className="video-link  mt-30">
                                <div className="single-popup-wrap">
                                    <img className="img-fluid border-radus-5" src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-01.webp" alt=""/>
                                    <div className="ht-popup-video video-button">
                                        <div className="video-mark">
                                            <div className="wave-pulse wave-pulse-1"></div>
                                            <div className="wave-pulse wave-pulse-2"></div>
                                        </div>
                                        <div className="video-button__two">
                                            <div className="video-play">
                                                <span className="video-play-icon"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="ht-banner-03">
                            <img className="img-fluid border-radus-5 animation_images three wow fadeInDown" src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-04.webp" alt=""/>
                        </div>

                        <div className="ht-banner-04">
                            <img className="img-fluid border-radus-5 animation_images four wow fadeInDown" src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-05.webp" alt=""/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--====================  Accordion area  ====================--> */}

    {/* <!--===========  feature-images-wrapper  Start =============--> */}
    <div className="feature-images-wrapper bg-gray section-space--ptb_100 overflow-hidden">
        <div className="container">

            <div className="row">
                <div className="col-lg-12">
                    {/* <!-- section-title-wrap Start --> */}
                    <div className="section-title-wrap text-center section-space--mb_10">
                        <h6 className="section-sub-title mb-20">Our services</h6>
                        <h3 className="heading">For your very specific industry, <br/> we have <span className="text-color-primary"> highly-tailored IT solutions.</span></h3>
                    </div>
                    {/* <!-- section-title-wrap Start --> */}
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="feature-images__two small-mt__10">
                        <div className="modern-grid-image-box row row--30">

                            <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60  small-mt__40">
                                {/* <!-- ht-box-icon Start --> */}
                                <a   className="ht-box-images style-02">
                                    <div className="image-box-wrap">
                                        <div className="box-image">
                                            <img className="img-fulid" src="assets/images/icons/mitech-processing-service-image-01-80x83.webp" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h6 className="heading">Backup and recovery </h6>
                                        </div>
                                    </div>
                                </a>
                                {/* <!-- ht-box-icon End --> */}
                            </div>

                            <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                                {/* <!-- ht-box-icon Start --> */}
                                <a   className="ht-box-images style-02">
                                    <div className="image-box-wrap">
                                        <div className="box-image">
                                            <img className="img-fulid" src="assets/images/icons/mitech-processing-service-image-02-80x83.webp" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h6 className="heading">Cloud Managed Services</h6>
                                        </div>
                                    </div>
                                </a>
                                {/* <!-- ht-box-icon End --> */}
                            </div>

                            <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                                {/* <!-- ht-box-icon Start --> */}
                                <a   className="ht-box-images style-02">
                                    <div className="image-box-wrap">
                                        <div className="box-image">
                                            <img className="img-fulid" src="assets/images/icons/mitech-processing-service-image-03-80x83.webp" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h6 className="heading">IT Security & Compliance</h6>
                                        </div>
                                    </div>
                                </a>
                                {/* <!-- ht-box-icon End --> */}
                            </div>

                            <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                                {/* <!-- ht-box-icon Start --> */}
                                <a   className="ht-box-images style-02">
                                    <div className="image-box-wrap">
                                        <div className="box-image">
                                            <img className="img-fulid" src="assets/images/icons/mitech-processing-service-image-04-80x83.webp" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h6 className="heading">Software Development</h6>
                                        </div>
                                    </div>
                                </a>
                                {/* <!-- ht-box-icon End --> */}
                            </div>

                            <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                                {/* <!-- ht-box-icon Start --> */}
                                <a   className="ht-box-images style-02">
                                    <div className="image-box-wrap">
                                        <div className="box-image">
                                            <img className="img-fulid" src="assets/images/icons/mitech-processing-service-image-05-80x83.webp" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h6 className="heading">Managed IT Services</h6>
                                        </div>
                                    </div>
                                </a>
                                {/* <!-- ht-box-icon End --> */}
                            </div>

                            <div className="single-item wow move-up col-lg-4 col-md-6 section-space--mt_60">
                                {/* <!-- ht-box-icon Start --> */}
                                <a   className="ht-box-images style-02">
                                    <div className="image-box-wrap">
                                        <div className="box-image">
                                            <img className="img-fulid" src="assets/images/icons/mitech-processing-service-image-06-80x83.webp" alt=""/>
                                        </div>
                                        <div className="content">
                                            <h6 className="heading">IT consultancy</h6>
                                        </div>
                                    </div>
                                </a>
                                {/* <!-- ht-box-icon End --> */}
                            </div>
                        </div>
                    </div>
                    <div className="section-under-heading text-center section-space--mt_60">Challenges are just opportunities in disguise. <a  >Take the challenge!</a></div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--===========  feature-images-wrapper  End =============--> */}



    {/* <!--=========== fun fact Wrapper Start ==========--> */}
    <div className="fun-fact-wrapper section-space--ptb_100">
        <div className="container">

            <div className="row">
                <div className="col-lg-4 offset-lg-1">
                    <div className="modern-number-01 me-5">
                        <h2 className="heading"><span className="mark-text">38</span>Years’ Experience in IT</h2>
                        <h3 className="heading">Learn more about our <span className="text-color-primary">Success Stories</span></h3>
                    </div>
                </div>
                <div className="col-lg-7 col-md-8">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 wow move-up">
                            <div className="fun-fact--three text-center">
                                <div className="fun-fact__count counter">1790</div>
                                <h6 className="fun-fact__text">Account numbers</h6>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 wow move-up">
                            <div className="fun-fact--three text-center">
                                <div className="fun-fact__count counter">32</div>
                                <h6 className="fun-fact__text">Finished projects</h6>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 wow move-up">
                            <div className="fun-fact--three text-center">
                                <div className="fun-fact__count counter">73</div>
                                <h6 className="fun-fact__text">Happy clients</h6>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 wow move-up">
                            <div className="fun-fact--three text-center">
                                <div className="fun-fact__count counter">318</div>
                                <h6 className="fun-fact__text">Blog posts</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    {/* <!--=========== fun fact Wrapper End ==========--> */}



    {/* <!--=========== Computing Start ===============--> */}

    <div className="processing-computing-area bg-gray-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="computing-info-box text-center">
                        <h2>IT Security & Computing</h2>
                        <div className="section-under-heading text-center mt-30">Challenges are just opportunities in disguise. <a  >Take the challenge!</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!--=========== Computing End ===============--> */}


    {/* <!--===========  feature-large-images-wrapper  Start =============--> */}
    <div className="feature-large-images-wrapper section-space--ptb_100">
        <div className="container">

            <div className="row">
                <div className="col-lg-12">
                    {/* <!-- section-title-wrap Start --> */}
                    <div className="section-title-wrap text-center section-space--mb_30">
                        <h6 className="section-sub-title mb-20">Optimal Technology Solutions</h6>
                        <h3 className="heading">Preparing for your success, <br/> we provide <span className="text-color-primary">truly prominent IT solutions.</span></h3>
                    </div>
                    {/* <!-- section-title-wrap Start --> */}
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="row small-mt__30">

                        <div className="col-lg-3 col-md-6 mt-30">
                            {/* <!-- Box large image warap Start --> */}
                            <a   className="box-large-image__two">
                                <div className="box-large-image__two__box">
                                    <div className="box-large-image__midea">
                                        <div className="single-gallery__thum bg-item-images bg-img" data-bg="assets/images/box-image/home-processing-software-image-01.webp"></div>
                                    </div>

                                    <div className="box-info">
                                        <h5 className="heading">IT Design</h5>
                                        <div className="box-more-info">
                                            <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.</div>
                                            <div className="btn">
                                                <i className="button-icon fas fa-arrow-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            {/* <!-- Box large image warap End --> */}
                        </div>

                        <div className="col-lg-6 col-md-6  mt-30">
                            {/* <!-- Box large image warap Start --> */}
                            <a   className="box-large-image__two">
                                <div className="box-large-image__two__box">
                                    <div className="box-large-image__midea">
                                        <div className="single-gallery__thum bg-item-images bg-img" data-bg="assets/images/box-image/home-processing-software-image-02.webp"></div>
                                    </div>

                                    <div className="box-info">
                                        <h5 className="heading">IT Management</h5>
                                        <div className="box-more-info">
                                            <div className="text">It’s possible to simultaneously manage and transform key information from one server to another.</div>
                                            <div className="btn">
                                                <i className="button-icon fas fa-arrow-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            {/* <!-- Box large image warap End --> */}
                        </div>

                        <div className="col-lg-3 col-md-6 mt-30">
                            {/* <!-- Box large image warap Start --> */}
                            <a   className="box-large-image__two">
                                <div className="box-large-image__two__box">
                                    <div className="box-large-image__midea">
                                        <div className="single-gallery__thum bg-item-images bg-img" data-bg="assets/images/box-image/home-processing-software-image-03.webp"></div>
                                    </div>

                                    <div className="box-info">
                                        <h5 className="heading">Data Security</h5>
                                        <div className="box-more-info">
                                            <div className="text">Back up your database, store in a safe and secure place while still maintaining its accessibility.</div>
                                            <div className="btn">
                                                <i className="button-icon fas fa-arrow-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            {/* <!-- Box large image warap End --> */}
                        </div>

                        <div className="col-lg-4 col-md-6 mt-30">
                            {/* <!-- Box large image warap Start --> */}
                            <a   className="box-large-image__two">
                                <div className="box-large-image__two__box">
                                    <div className="box-large-image__midea">
                                        <div className="single-gallery__thum bg-item-images bg-img" data-bg="assets/images/box-image/home-processing-software-image-04.webp"></div>
                                    </div>

                                    <div className="box-info">
                                        <h5 className="heading">Business Reform</h5>
                                        <div className="box-more-info">
                                            <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.</div>
                                            <div className="btn">
                                                <i className="button-icon fas fa-arrow-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            {/* <!-- Box large image warap End --> */}
                        </div>

                        <div className="col-lg-4 col-md-6 mt-30">
                            {/* <!-- Box large image warap Start --> */}
                            <a   className="box-large-image__two">
                                <div className="box-large-image__two__box">
                                    <div className="box-large-image__midea">
                                        <div className="single-gallery__thum bg-item-images bg-img" data-bg="assets/images/box-image/mitech-home-infotechno-box-large-image_02-330x330.webp"></div>
                                    </div>

                                    <div className="box-info">
                                        <h5 className="heading">Infrastructure Plan</h5>
                                        <div className="box-more-info">
                                            <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.</div>
                                            <div className="btn">
                                                <i className="button-icon fas fa-arrow-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            {/* <!-- Box large image warap End --> */}
                        </div>

                        <div className="col-lg-4 col-md-6 mt-30">
                            {/* <!-- Box large image warap Start --> */}
                            <a   className="box-large-image__two">
                                <div className="box-large-image__two__box">
                                    <div className="box-large-image__midea">
                                        <div className="single-gallery__thum bg-item-images bg-img" data-bg="assets/images/box-image/mitech-home-infotechno-box-large-image_04-330x330.webp"></div>
                                    </div>

                                    <div className="box-info">
                                        <h5 className="heading">Firewall Advancement</h5>
                                        <div className="box-more-info">
                                            <div className="text">We provide the most responsive and functional IT design for companies and businesses worldwide.</div>
                                            <div className="btn">
                                                <i className="button-icon fas fa-arrow-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            {/* <!-- Box large image warap End --> */}
                        </div>

                    </div>
                    <div className="col-lg-12">
                        <div className="feature-list-button-box mt-40 text-center">
                            <a   className="ht-btn ht-btn-md">Learn more</a>
                            <a   className="ht-btn ht-btn-md ht-btn--outline">Contact us</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    {/* <!--===========  feature-large-images-wrapper  End =============--> */}

    {/* <!--====================  testimonial section ====================--> */}
    <div className="testimonial-slider-area bg-gray section-space--ptb_100">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title-wrap text-center section-space--mb_40">
                        <h6 className="section-sub-title mb-20">Testimonials</h6>
                        <h3 className="heading">What do people praise about <span className="text-color-primary"> JJR Software?</span></h3>
                    </div>
                    <div className="testimonial-slider">
                        <div className="swiper-container testimonial-slider__container">
                            <div className="swiper-wrapper testimonial-slider__wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-slider__one wow move-up">

                                        <div className="testimonial-slider--info">
                                            <div className="testimonial-slider__media">
                                                <img src="assets/images/testimonial/mitech-testimonial-avata-02-90x90.webp" className="img-fluid" alt=""/>
                                            </div>

                                            <div className="testimonial-slider__author">
                                                <div className="testimonial-rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="author-info">
                                                    <h6 className="name">Abbie Ferguson</h6>
                                                    <span className="designation">Marketing</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @JJR Software is one of the most impressive to me.</div>

                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-slider__one wow move-up">

                                        <div className="testimonial-slider--info">
                                            <div className="testimonial-slider__media">
                                                <img src="assets/images/testimonial/mitech-testimonial-avata-03-90x90.webp" className="img-fluid" alt=""/>
                                            </div>

                                            <div className="testimonial-slider__author">
                                                <div className="testimonial-rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="author-info">
                                                    <h6 className="name">Monica Blews</h6>
                                                    <span className="designation">Web designer</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @JJR Software is one of the most impressive to me.</div>

                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-slider__one wow move-up">

                                        <div className="testimonial-slider--info">
                                            <div className="testimonial-slider__media">
                                                <img src="assets/images/testimonial/mitech-testimonial-avata-04-90x90.webp" className="img-fluid" alt=""/>
                                            </div>

                                            <div className="testimonial-slider__author">
                                                <div className="testimonial-rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="author-info">
                                                    <h6 className="name">Abbie Ferguson</h6>
                                                    <span className="designation">WEB DESIGNER</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @JJR Software is one of the most impressive to me.</div>

                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-slider__one wow move-up">

                                        <div className="testimonial-slider--info">
                                            <div className="testimonial-slider__media">
                                                <img src="assets/images/testimonial/mitech-testimonial-avata-01-90x90.webp" className="img-fluid" alt=""/>
                                            </div>

                                            <div className="testimonial-slider__author">
                                                <div className="testimonial-rating">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="author-info">
                                                    <h6 className="name">Abbie Ferguson</h6>
                                                    <span className="designation">WEB DESIGNER</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="testimonial-slider__text">I’ve been working with over 35 IT companies on more than 200 projects of our company, but @JJR Software is one of the most impressive to me.</div>

                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination swiper-pagination-t01 section-space--mt_30"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--====================  End of testimonial section  ====================--> */}

    {/* <!--====================  brand logo slider area ====================--> */}
    <div className="brand-logo-slider-area section-space--ptb_60">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/* <!-- brand logo slider --> */}
                    <div className="brand-logo-slider__container-area">
                        <div className="swiper-container brand-logo-slider__container">
                            <div className="swiper-wrapper brand-logo-slider__one">
                                <div className="swiper-slide brand-logo brand-logo--slider">
                                    <a  >
                                        <div className="brand-logo__image">
                                            <img src="assets/images/brand/mitech-client-logo-01.webp" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="brand-logo__image-hover">
                                            <img src="assets/images/brand/mitech-client-logo-01-hover.webp" className="img-fluid" alt=""/>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide brand-logo brand-logo--slider">
                                    <a  >
                                        <div className="brand-logo__image">
                                            <img src="assets/images/brand/mitech-client-logo-02.webp" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="brand-logo__image-hover">
                                            <img src="assets/images/brand/mitech-client-logo-02-hover.webp" className="img-fluid" alt=""/>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide brand-logo brand-logo--slider">
                                    <a  >
                                        <div className="brand-logo__image">
                                            <img src="assets/images/brand/mitech-client-logo-03.webp" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="brand-logo__image-hover">
                                            <img src="assets/images/brand/mitech-client-logo-03-hover.webp" className="img-fluid" alt=""/>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide brand-logo brand-logo--slider">
                                    <a  >
                                        <div className="brand-logo__image">
                                            <img src="assets/images/brand/mitech-client-logo-04.webp" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="brand-logo__image-hover">
                                            <img src="assets/images/brand/mitech-client-logo-04-hover.webp" className="img-fluid" alt=""/>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide brand-logo brand-logo--slider">
                                    <a  >
                                        <div className="brand-logo__image">
                                            <img src="assets/images/brand/mitech-client-logo-05.webp" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="brand-logo__image-hover">
                                            <img src="assets/images/brand/mitech-client-logo-05-hover.webp" className="img-fluid" alt=""/>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide brand-logo brand-logo--slider">
                                    <a  >
                                        <div className="brand-logo__image">
                                            <img src="assets/images/brand/mitech-client-logo-06.webp" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="brand-logo__image-hover">
                                            <img src="assets/images/brand/mitech-client-logo-06-hover.webp" className="img-fluid" alt=""/>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide brand-logo brand-logo--slider">
                                    <a  >
                                        <div className="brand-logo__image">
                                            <img src="assets/images/brand/mitech-client-logo-07.webp" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="brand-logo__image-hover">
                                            <img src="assets/images/brand/mitech-client-logo-07-hover.webp" className="img-fluid" alt=""/>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide brand-logo brand-logo--slider">
                                    <a  >
                                        <div className="brand-logo__image">
                                            <img src="assets/images/brand/mitech-client-logo-08.webp" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="brand-logo__image-hover">
                                            <img src="assets/images/brand/mitech-client-logo-08-hover.webp" className="img-fluid" alt=""/>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide brand-logo brand-logo--slider">
                                    <a  >
                                        <div className="brand-logo__image">
                                            <img src="assets/images/brand/mitech-client-logo-09.webp" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="brand-logo__image-hover">
                                            <img src="assets/images/brand/mitech-client-logo-09-hover.webp" className="img-fluid" alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--====================  End of brand logo slider area  ====================--> */}

    {/* <!--====================  Conact us Section Start ====================--> */}
    <div className="contact-us-section-wrappaer processing-contact-us-bg section-space--ptb_120">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-lg-6">
                    <div className="conact-us-wrap-one">
                        <h3 className="heading text-white">Obtaining further information by make a contact with our experienced IT staffs. </h3>

                        <div className="sub-heading text-white">We’re available for 8 hours a day!<br/>Contact to require a detailed analysis and assessment of your plan.</div>

                    </div>
                </div>

                <div className="col-lg-6 col-lg-6">
                    <div className="contact-info-two text-center">
                        <div className="icon">
                            <span className="fa fa-phone"></span>
                        </div>
                        <h6 className="heading font-weight--reguler">Reach out now!</h6>
                        <h2 className="call-us"><a href="tel:190068668">+91 72838 87707</a></h2>
                        <div className="contact-us-button mt-20">
                            <a   className="btn btn--secondary">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--====================  Conact us Section End  ====================--> */}
</div>
</div>
)}

export default StartUp;