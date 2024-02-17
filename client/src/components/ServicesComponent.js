import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/servicescomponent.css'; // Import your CSS file
import SectionTitle from './SectionTitle';
import Zoom from 'react-reveal/Zoom';

import { global_para, global_headings, servicesData } from '../constants/Contents';


const ServicesComponent = ({sectiontitle, sectiondescription}) => {
  return (
    <div className="container text-center">
     
      <div className="row pt-5 mt-30">
         <SectionTitle title={sectiontitle} sectiondescription=""/>
      {servicesData.map((service, index) => (

     <Zoom>
        <div key={index} className="col-lg-4 col-sm-6 mb-30 pb-5">
        
          <Link className="card" to={`/services#${service.serviceId}`}>
            <div className="box-shadow  rounded-circle mx-auto text-center" id={`section-${service.serviceId}`}>
              <img src={service.icon} alt="icon"/>
            </div>
            <div className="card-body text-center">
              <h3 className="card-title pt-1" style={{textTransform: "uppercase"}}>{service.title}</h3>
              <p className="card-text text-sm">

                {service.description}
              </p>
              
            </div>
          </Link>
        </div>
        </Zoom>
         ))}
       
      </div>
    </div>
  );
};

export default ServicesComponent;
