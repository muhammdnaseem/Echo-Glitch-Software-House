import React, { useEffect } from 'react';
import  '../assets/css/acheivement.css';
import SectionTitle from './SectionTitle';
import { COLORS, BG_COLORS, coloredHeadingPrimary, headingPrimary, desc_style, MainHeadingStyle, MainSecondHeadingStyle } from '../constants/Theme';
import { global_para, global_headings, work_data } from '../constants/Contents';
import publishedicon from '../assets/images/icons/apps-icon.png';
import installicon from '../assets/images/icons/installs-icon.png';
import membersicon from '../assets/images/icons/members-icon.png';


const Achievement = ({image, description, listItems, sectiontitle}) => {
  
  return (
    <div id="container-fluid">
    <div className="row text-center mt-5 achievements">
     <SectionTitle title={sectiontitle} sectiondescription=""/>
     <p style={{ ...desc_style, padding: '0 10%', fontSize: '20px' }}>
     {description}
     </p>

     <h1  className="main-heading"> {work_data.downloads} </h1>
     <h2  className="main-second-heading"
     style={{color: "#DFA14A",
  fontSize: "40px",
  fontWeight: "650",
  letterSpacing: "0.3em"}}
     > DOWNLOADS </h2>
    <div className="row container mt-5 d-flex text-center">
    <div className="col-sm-4">
    <img src={publishedicon} className="counter-icon" alt="downloads-icon"/>
    <h1 style={headingPrimary}>{work_data.published_apps} </h1>
    <p style={{ ...desc_style, fontSize: '20px', marginTop: '30px'}}> PUBLISHED APPS </p>
    </div>
    <div className="col-sm-4">
    <img src={installicon} className="counter-icon" alt="install-icon"/>
    <h1 style={headingPrimary}>{work_data.apps} </h1>
    <p style={{ ...desc_style, fontSize: '20px', marginTop: '30px'}}> INSTALLS ON PLAYSTORE </p>
    </div>
    <div className="col-sm-4">
    <img src={membersicon} className="counter-icon" alt="published-icon"/>
    <h1 style={headingPrimary}>{work_data.team_members} </h1>
    <p style={{ ...desc_style, fontSize: '20px', marginTop: '30px'}}> STRONG TEAM </p>
    </div>
    </div>
   
     
     </div>
    </div>
  );
};

export default Achievement;
