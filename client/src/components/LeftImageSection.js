import React, { useEffect } from 'react';
import  '../assets/css/leftimagesection.css';
import SectionTitle from './SectionTitle';
import { COLORS, BG_COLORS, coloredHeadingPrimary, headingPrimary, desc_style, belowPrimary } from '../constants/Theme';
import { global_para, global_headings } from '../constants/Contents';
import Fade from 'react-reveal/Fade';

const LeftImageSection = ({image, imageshape, description, sectiontitle, name, title}) => {
  return (
    <div id="left-image-section">
    <div className="row text-center mt-5">
    <Fade up>
     <SectionTitle title={sectiontitle} sectiondescription=""/>
  </Fade>
    <Fade left>
      <div className="col-sm-6 text-center container left-container">
    
    <div className="left-image-frame">
    <div className="colored-frame">
  <img src={image} alt="Description" className={`left-section-image ${imageshape}`}>
  
  </img>
  </div>
  </div>

     </div>
       </Fade>
     <Fade right>
       <div className="col-sm-6 container left-container d-flex align-items-center justify-content-center"
       style={{ marginTop: 'auto', marginBottom: 'auto' }}>
       <div className="container">
    <p className="left-container-para" style={desc_style}> {description}   </p>
   
    <h1 className=" mt-3" style={belowPrimary}> {name} </h1>
    <h1 style={belowPrimary}>{title} </h1>
 </div>
    </div>
      </Fade>
     </div>
    </div>
  );
};

export default LeftImageSection;
