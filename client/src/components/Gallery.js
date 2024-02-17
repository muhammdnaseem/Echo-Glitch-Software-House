import React from 'react';
import  '../assets/css/gallery.css';
import { global_para, galleryimages } from '../constants/Contents';
import Zoom from 'react-reveal/Zoom';

const Gallery = () => {

  return (
    <div className="awesome-portfolio-area fix">
     
        <div className="row awesome-portfolio-content" id="MixItUp68DC04">
         {galleryimages.map((item, index) => (
          <div key={index} className=" col-sm-3 single-awesome-portfolio mix all flat illustration" style={{ display: 'inline-block' }}>

            <a href="#">
          
              <div className="awesome-img">
               <img src={galleryimages[index]} alt={`Image ${index + 1}`} />
               </div>
             
            </a>
          </div>
        ))}
        </div>
      
 
    </div>
  );
};

export default Gallery;
