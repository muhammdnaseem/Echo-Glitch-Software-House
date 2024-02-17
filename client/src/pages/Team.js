import React from 'react';
import HeroComponent from '../components/HeroComponent';
import RightImageSection from '../components/RightImageSection';
import LeftImageSection from '../components/LeftImageSection';
import MultiSlider from '../components/MultiSlider';
import Achievement from '../components/Achievement';
import ServicesComponent from '../components/ServicesComponent';
import Events from '../components/Events';
import TeamMembers from '../components/TeamMembers';


import { COLORS, BG_COLORS, coloredHeadingPrimary } from '../constants/Theme';
import { global_para, global_headings, hero_section, skillsData, servicesData } from '../constants/Contents';
import  '../assets/css/global.css';
import  '../assets/css/home.css';


function Team() {



  return (
    <React.Fragment>
 
   <div className="container">
   <HeroComponent 
   herodisplay="d-flex text-center"
   title1={hero_section.team_h1}
   title2={hero_section.team_h2}
   para={hero_section.team_para}
   aboutbutton="d-none"
   marginbottom="-100px"
   />

<TeamMembers />



   </div>
  
    </React.Fragment>
  );
}

export default Team;
