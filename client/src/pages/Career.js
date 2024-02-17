import React from 'react';
import HeroComponent from '../components/HeroComponent';
import RightImageSection from '../components/RightImageSection';
import LeftImageSection from '../components/LeftImageSection';
import MultiSlider from '../components/MultiSlider';
import Achievement from '../components/Achievement';
import ServicesComponent from '../components/ServicesComponent';
import Events from '../components/Events';
import Jobs from '../components/Jobs';



import { COLORS, BG_COLORS, coloredHeadingPrimary } from '../constants/Theme';
import { global_para, global_headings, hero_section, skillsData, servicesData, ColoredHeroSection } from '../constants/Contents';
import  '../assets/css/global.css';
import  '../assets/css/home.css';


function Career() {



  return (
    <React.Fragment>
 
   <div className="container">
   <HeroComponent 
   herodisplay=" text-center"
   title1={hero_section.career_h1}
   title2={hero_section.career_h2}
   title3=""
   para={hero_section.career_para}
   colored_para={hero_section.career_colored_para}
   aboutbutton="d-none"
   marginbottom="-100px"
   />


<Jobs 
sectiontitle="OPEN VACANCIES"/>


   </div>
  
    </React.Fragment>
  );
}

export default Career;
