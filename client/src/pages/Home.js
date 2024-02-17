import React from 'react';
import 'animate.css';
import 'aos/dist/aos.css';

import HeroComponent from '../components/HeroComponent';
import RightImageSection from '../components/RightImageSection';
import LeftImageSection from '../components/LeftImageSection';
import Gallery from '../components/Gallery';
import Achievement from '../components/Achievement';
import ServicesComponent from '../components/ServicesComponent';

import Fade from 'react-reveal/Fade';
import { COLORS, BG_COLORS, coloredHeadingPrimary } from '../constants/Theme';
import { global_para, global_headings, hero_section } from '../constants/Contents';
import  '../assets/css/global.css';
import  '../assets/css/home.css';
import ceoImage from '../assets/images/team/CEO Image.png';
import mdImage from '../assets/images/team/mdimage.jpeg';
import techImage from '../assets/images/tech.jpg';


function Home() {

  return (
    <React.Fragment>
      <div className="container  ">
      <Fade up>
        <HeroComponent 
          title1={hero_section.home_h1}
          title2={hero_section.home_h2}
          title3={hero_section.home_h3}
          para={hero_section.home_para}
          aboutbutton=""
        />
       {/* <Gallery className="container " /> */}
        <Achievement 
          className="container animate__animated animate__bounceIn" 
          sectiontitle="Our Achievement"
          description={global_para.achievement_para}
        />
          </Fade>
        <RightImageSection
          className="" 
          sectiontitle="ONE STEP AHEAD IN TECHNOLOGY!" 
          description={global_para.ahead_technology_description}
          image={techImage}
         
          title=""
          listItems="d-none"
        />
        <Fade up>
        <ServicesComponent 
          className=" "
          sectiontitle="OUR SERVICES"
        />
  </Fade>
          <LeftImageSection
          className="  animate__slideInLeft"
          sectiontitle="MESSAGE FROM THE CEO!" 
          description={global_para.ceo_message}
          image={ceoImage}
          name="Syed Muhammad Hamid Gillani"
          title="CEO"
          imageshape="rectangle"
        />
      
      <RightImageSection
          className="  animate__rotateIn" 
          sectiontitle="MESSAGE FROM THE MD!" 
          description={global_para.md_message}
          listItems="d-none"
          image={mdImage}
          name="Muhammad Awais"
          title="Managing Director"
          imageshape="rectangle"
        />

      </div>
    </React.Fragment>
  );
}

export default Home;

