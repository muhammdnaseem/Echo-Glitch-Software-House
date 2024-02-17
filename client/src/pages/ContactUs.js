import React from 'react';
import HeroComponent from '../components/HeroComponent';
import RightImageSection from '../components/RightImageSection';
import LeftImageSection from '../components/LeftImageSection';
import MultiSlider from '../components/MultiSlider';
import Achievement from '../components/Achievement';
import ServicesComponent from '../components/ServicesComponent';
import Contact from '../components/Contact';


import { COLORS, BG_COLORS, coloredHeadingPrimary } from '../constants/Theme';
import { global_para, global_headings, hero_section, skillsData, servicesData } from '../constants/Contents';
import  '../assets/css/global.css';
import  '../assets/css/home.css';


function ContactUs() {



  return (
    <React.Fragment>
 
   <div className="container">
   <HeroComponent 
   herodisplay="d-flex text-center"
   title1="LETS GET IN"
   title2="TOUCH"
   para="Have something to say? Our team is all ears."
   aboutbutton="d-none"
   marginbottom="-100px"
   />

<Contact />



   </div>
  
    </React.Fragment>
  );
}

export default ContactUs;
