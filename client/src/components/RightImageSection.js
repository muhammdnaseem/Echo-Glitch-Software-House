import React, { useEffect } from 'react';
import 'animate.css';
import  '../assets/css/rightimagesection.css';
import SectionTitle from './SectionTitle';
import { COLORS, BG_COLORS, coloredHeadingPrimary, headingPrimary, desc_style, belowPrimary } from '../constants/Theme';
import { global_para, global_headings } from '../constants/Contents';
import Fade from 'react-reveal/Fade';

const RightImageSection = ({image, imageshape, description, listItems, sectiontitle, name, title}) => {
  return (
    <div id="right-image-section">
    <div className="row text-center mt-5">
     <SectionTitle title={sectiontitle} sectiondescription="" className=""/>
    <div className="col-sm-6 container right-container " >
    <Fade left>
    <div className="container">
    <p className="right-container-para" style={desc_style}> {description}  </p>
    
  <ul className={`list-style mt-5 ${listItems}`}>

        <li> Digital Market Research and PinPoint Analytic’s </li>
        <li> App Search Optimization </li>
        <li> Apps Marketing </li>
        <li> Search Engine Optimization </li>
        <li> Social Media Marketing </li>
        <li> Ad optimization on display networks like Google, Facebook and Bing. </li>
        <li> Ad monetization with Admob, Facebook and related mediation ad networks. </li>
    </ul>

    <h1 className=" mt-3" style={belowPrimary}> {name} </h1>
    <h1 style={belowPrimary}>{title} </h1>
    </div>
    </Fade>
    </div> <Fade right>
      <div className="col-sm-6 text-center container right-container">
    
<div className="frame">
  <img src={image} alt="Description" className={imageshape} >
  
  </img>
  </div>



     </div>
       </Fade>
     </div>
    </div>
  );
};

export default RightImageSection;
