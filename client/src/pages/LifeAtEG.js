import React from 'react';
import HeroComponent from '../components/HeroComponent';
import RightImageSection from '../components/RightImageSection';
import LeftImageSection from '../components/LeftImageSection';
import MultiSlider from '../components/MultiSlider';
import Achievement from '../components/Achievement';
import ServicesComponent from '../components/ServicesComponent';
import Events from '../components/Events';


import { COLORS, BG_COLORS, coloredHeadingPrimary } from '../constants/Theme';
import { global_para, global_headings, hero_section, skillsData, servicesData } from '../constants/Contents';
import  '../assets/css/global.css';
import  '../assets/css/home.css';


function LifeAtEG() {



  return (
    <React.Fragment>
 
   <div className="container">
   <HeroComponent 
   herodisplay="d-lg-flex d-sm-block text-center"
   title1={hero_section.life_echoglitch_h1}
   title2={hero_section.life_echoglitch_h2}
   para={hero_section.life_echoglitch_para}
   aboutbutton="d-none"
   marginbottom="-100px"
   />
   </div>
<div className="container events-container">
<Events />



   </div>
  
    </React.Fragment>
  );
}

export default LifeAtEG;
