import React, { useState } from 'react';
import '../assets/css/downloads.css';

const Downloads = () => {
  const [isListVisible, setListVisible] = useState(false);

  const handleDownloadsClick = () => {
    setListVisible(!isListVisible);
  };

  return (
    <div className="downloads mt-0">
      <button className="downloads-button" id="downloads" onClick={handleDownloadsClick}>
       
        Downloads
        
      </button>
      <ul className="downloads-lists" style={{ display: isListVisible ? 'block' : 'none'}}>
        <li className="downloads-list">
         
          <a href="#">Profile</a>
        </li>
        <li className="downloads-list">
          
          <a href="#">Flyer</a>
        </li>
        <li className="downloads-list">
        
          <a href="#">Brocheure</a>
        </li>
        
        
      </ul>
    </div>
  );
};

export default Downloads;
