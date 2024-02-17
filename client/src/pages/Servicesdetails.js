

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeroComponent from '../components/HeroComponent';
import RightImageSection from '../components/RightImageSection';
import LeftImageSection from '../components/LeftImageSection';
import MultiSlider from '../components/MultiSlider';
import Achievement from '../components/Achievement';
import ServicesComponent from '../components/ServicesComponent';

import { service1, service2 } from '../constants/Contents';
import { COLORS, BG_COLORS, coloredHeadingPrimary } from '../constants/Theme';
import { global_para, global_headings, hero_section, skillsData, servicesData } from '../constants/Contents';
import  '../assets/css/global.css';
import  '../assets/css/home.css';


function Servicesdetails() {



  return (
    <React.Fragment>
  
   <div className="container">
   <HeroComponent 
   title1={hero_section.services_h1}
   title2={hero_section.services_h2}
   para={hero_section.services_para}
   aboutbutton="d-none"
   marginbottom="-100px"
   />





{servicesData.map((service, index) => {
    
    
  if (index % 2 === 0) {
      const combinedPara = service.description + ' ' + service.para;
    return (
        <div className="" id={service.serviceId}>
      <RightImageSection
        key={index}
        sectiontitle={service.title} 
        description={combinedPara}
        image={service.image}
        name={service.image_title} 
        title=""
        listItems="d-none"
        
      />
      </div>
    );
  } else {
      const combinedPara = service.description + ' ' + service.para;
    return (
      <div className="" id={service.serviceId}>
      <LeftImageSection
        key={index}
        sectiontitle={service.title}
        description={combinedPara}
        image={service.image}
        name={service.image_title} 
        title=""
        id={service.serviceId}
      />
        </div>
    );
  }

})}



   </div>
  
    </React.Fragment>
  );
}

export default Servicesdetails;
