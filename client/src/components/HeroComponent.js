import React from 'react';
import '../assets/css/herosection.css';
import '../assets/css/global.css';
import {Link} from 'react-router-dom';
import { COLORS, BG_COLORS, coloredHeadingPrimary, headingPrimary, para_style, colored_para_style } from '../constants/Theme';
import { global_para, global_headings, hero_section, ColoredHeroSection } from '../constants/Contents';
import Fade from 'react-reveal/Fade';

const HeroComponent = ({ title1, title2, title3, para, colored_para, aboutbutton, marginbottom, herodisplay }) => {
  return (
    <div id="hero" className="hero row container text-center" style={{ marginBottom: marginbottom }}>
    <Fade up>
      
        <div className={`col-sm-12 hero-container ${herodisplay}`} style={{ justifyContent: 'center', alignItems: 'center' }}>
        
            <ColoredHeroSection mainText={title1} coloredText={title2} secondText={title3}/>
          
         
         
        </div>
        <div className="col-sm-12 mt-5 text-center hero-paragraph">
        
          <p className="quotation" style={para_style}> {para} </p>
          
          <Link to="/About">
          <button className={`colored-button mt-5 ${aboutbutton}`}> ABOUT US </button>
          </Link>
         
        </div>
    
      </Fade>
    </div>
  );
};

export default HeroComponent;
