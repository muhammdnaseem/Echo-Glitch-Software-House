import React from 'react';
import { FaDesktop, FaUser, FaComment, FaImage, FaTh, FaCog } from 'react-icons/fa';
import '../assets/css/sectiontitle.css';

const SectionTitle = ({title, sectiondescription}) => {


  return (
   <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2 className="section-heading">
              <span>{title}</span>
              </h2>
              
              <p>{sectiondescription}</p>
            </div>
          </div>
        </div>
       </div>
    
  );
};



export default SectionTitle;
