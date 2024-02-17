import React from 'react';
import '../assets/css/footer.css'; // Import your CSS file
import { logo } from '../constants/Contents';
import logoImage from '../assets/images/logo-bg-remove.png';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import {Link} from 'react-router-dom';
import { COLORS } from '../constants/Theme';
import { FaRegistered } from "react-icons/fa";

import { global_para, global_headings, servicesData } from '../constants/Contents';

const Footer = () => {
  return (
   
      <div className="footer-top">
        <div className="container">
          <div className="footer-border-bottom">
            <div className="row d-none">
              <div className="col-lg-4 col-xl-3">
                <h4 className="text-white">
                  Sign up to Get Latest Updates
                </h4>
              </div>
              <div className="col-lg-4 col-xl-6">
                <form className="d-flex flex-row mb-2 p-1 bg-white input-group">
                  <input type="email" className="form-control rounded-0 border-0" placeholder="you@yoursite.com" />
                  <button className="btn btn-secondary rounded-0 flex-shrink-0" type="submit">Subscribe</button>
                </form>
              </div>
              <div className="col-lg-4 col-xl-3">
                <div className="text-lg-end text-white">
                  <span className="h6">Call Us On</span><br />
                  <span className="h3">1-800-222-000</span>
                </div>
              </div>
            </div>
          </div>
         <div className="row">
         
    <div className="col-sm-6 col-lg-4 my-4 text-center">
   
        <div className="mb-4 logo-container mx-auto">


 
            <img src={logoImage} title="" alt="footer-logo" className="footer-logo" />

        
        </div>
                    <div className="logo-text mb-4 text-white">We believe in redefining the future of mobile world in a most interesting way by requiring minimal human interaction.</div>
                    <div className="nav footer-socila-icon text-center">
                        <a href="https://www.facebook.com/EchoglitchPvt/">

<FaFacebook className="social-icon"/>
</a>
                        <a href="https://www.instagram.com/echoglitchtech/">

<FaSquareInstagram className="social-icon" />
</a>

                        <a href="https://www.linkedin.com/in/echoglitch123/">

<FaLinkedin className="social-icon" />
</a>

 <a href="https://youtu.be/Ew8DeDY8gkA?si=m_Rbr_t6JUxJDEfB">

<IoLogoYoutube className="social-icon" />
</a>

                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 links-container">
                    <h5 className="footer-title mb-2">Company</h5>
                    <ul className="list-unstyled white-link footer-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/LifeAtEG">Life at EG</Link>
                        </li>
                       
                    </ul>

                    <h5 className="mb-2 mt-4">Support</h5>
                    <ul className="list-unstyled white-link footer-links">
                        <li>
                            <Link to="/Career">Career</Link>
                        </li>
                        <li>
                            <Link to="/ContactUs">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/Team">Our Team</Link>
                        </li>
                        
                    </ul>
                </div>
                <div className="col-sm-6 col-lg-4 services-links-container">
                    <h5 className="mb-2">Services</h5>
                    <ul className="list-unstyled white-link footer-links">
                      {servicesData.map((service, index) => (
                        <li  key={index} >
                            <Link to={`/services#${service.serviceId}`}>{service.title}</Link>
                        </li>
                        ))}
                        
                    </ul>
                </div>
                <div className="col-sm-6 col-lg-2 my-4 d-none">
                    <h5 className="mb-2">Support</h5>
                    <ul className="list-unstyled white-link footer-links">
                        <li>
                            <Link to="/Career">CAREER</Link>
                        </li>
                        <li>
                            <Link to="/ContactUs">CONTACT US</Link>
                        </li>
                        <li>
                            <Link to="/Team">OUR TEAM</Link>
                        </li>
                        
                    </ul>
                </div>
               
            </div>
          <div className="footer-bottom footer-border-top light py-3">
            <div className="container text-left">
          
               
                <Link to="/" className="text-reset text-white d-flex">
                 <p style={{ color: COLORS.PRIMARY }}> Powered by </p> <p style={{paddingLeft: "10px"}}>echoglitch.co</p>
                </Link>
           
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Footer;
