import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contactus: React.FC = () => { 

    const validationSchema = Yup.object().shape({
        con_name: Yup.string().required('Name is required'),
        con_email: Yup.string().email('Invalid email address').required('Email is required'),
        con_subject: Yup.string().required('Name is required'),
        con_message: Yup.string().required('Name is required'),
        // Add more validation rules for other fields as needed
      });
      const initialValues = {
        con_name: '',
        con_email: '',
        con_subject: '',
        con_message: '',
        // Add more fields and their initial values here
      };
    
      const handleSubmit = (values) => {
        // Handle form submission logic here
        console.log(values);
      };
    return(
        <div>
    <div className="breadcrumb-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_box text-center">
                        <h2 className="breadcrumb-title">Contact us</h2>
                        {/* <!-- breadcrumb-list start --> */}
                        <ul className="breadcrumb-list">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Contact us </li>
                        </ul>
                        {/* <!-- breadcrumb-list end --> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- breadcrumb-area end --> */}

    <div id="main-wrapper">
        <div className="site-wrapper-reveal">
            {/* <!--====================  Conact us Section Start ====================--> */}
            <div className="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-lg-6">
                            <div className="conact-us-wrap-one mb-30">
                                <h3 className="heading">To make requests for <br/>further information, <br/><span className="text-color-primary">contact us</span> via our social channels. </h3>
                                <div className="sub-heading">We just need a couple of hours! <br/> No more than 2 working days since receiving your issue ticket.</div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-lg-6">
                            <div className="contact-form-wrap">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                                >
                                {/* <!-- <form id="contact-form" action="http://whizthemes.com/mail-php/jowel/mitech/php/mail.php" method="post"> --> */}
                                {(formik) => (
                                <Form id="contact-form" action="https://htmldemo.net/mitech/assets/php/mail.php" method="post">
                                    <div className="contact-form">
                                        <div className="contact-input">
                                            <div className="contact-inner">
                                                <input type="text" placeholder="Name *" 
                                                {...formik.getFieldProps('con_name')}
                                                />
                                                <ErrorMessage name="con_name" component="div" />
                                            </div>
                                            <div className="contact-inner">
                                                <input type="email" placeholder="Email *" 
                                                 {...formik.getFieldProps('con_email')}

                                                />
                                                <ErrorMessage name="con_email" component="div" />
                                            </div>
                                        </div>
                                        <div className="contact-inner">
                                            <input type="text" placeholder="Subject *" 
                                            {...formik.getFieldProps('con_subject')}
                                            />
                                            <ErrorMessage name="con_subject" component="div" />
                                        </div>
                                        <div className="contact-inner contact-message">
                                            <textarea placeholder="Please describe what you need." 
                                             {...formik.getFieldProps('con_message')}
                                             />
                                            <ErrorMessage name="con_message" component="div" />
                                        </div>
                                        <div className="submit-btn mt-20">
                                            <button className="ht-btn ht-btn-md" type="submit"  disabled={formik.isSubmitting}>Send message</button>
                                            <p className="form-messege"></p>
                                        </div>
                                    </div>
                                </Form>)}
                                </Formik>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--====================  Conact us Section End  ====================--> */}

            {/* <!--====================  Conact us info Start ====================--> */}
            <div className="contact-us-info-wrappaer section-space--pb_100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="conact-info-wrap mt-30">
                                <h5 className="heading mb-20">San Francisco</h5>
                                <ul className="conact-info__list">
                                    <li>58 Howard Street #2 San Francisco, CA 941</li>
                                    <li><a   className="hover-style-link text-color-primary">contact.sanfrancisco@mitech.com</a></li>
                                    <li><a   className="hover-style-link text-black font-weight--bold">(+68)1221 09876</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="conact-info-wrap mt-30">
                                <h5 className="heading mb-20">New York</h5>
                                <ul className="conact-info__list">
                                    <li>58 Howard Street #14 New York</li>
                                    <li><a   className="hover-style-link text-color-primary">contact.newyork@mitech.com</a></li>
                                    <li><a   className="hover-style-link text-black font-weight--bold">(+47)1221 09878</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="conact-info-wrap mt-30">
                                <h5 className="heading mb-20">Russia</h5>
                                <ul className="conact-info__list">
                                    <li>The Courtyard Building 11 Curtain Road, Russia</li>
                                    <li><a   className="hover-style-link text-color-primary">contact.russia@mitech.com</a></li>
                                    <li><a   className="hover-style-link text-black font-weight--bold">(+53)1221 09877</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!--====================  Conact us info End  ====================--> */}






            {/* <!--========== Call to Action Area Start ============--> */}
            <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-7">
                            <div className="cta-content md-text-center">
                                <h3 className="heading">We run all kinds of IT services that vow your <span className="text-color-primary"> success</span></h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="cta-button-group--two text-center">
                                <a   className="btn btn--white btn-one"><span className="btn-icon me-2"><i className="far fa-comment-alt"></i></span> Let's talk</a>
                                <a   className="btn btn--secondary btn-two "><span className="btn-icon me-2"><i className="fas fa-info-circle"></i></span> Get info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--========== Call to Action Area End ============--> */}




        </div>
        </div>
        </div>
    )}

export default Contactus;