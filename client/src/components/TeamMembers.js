import React from 'react';
import '../assets/css/teammember.css';


import { global_para, global_headings, hero_section, teamMembers } from '../constants/Contents';

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import SectionTitle from './SectionTitle';


const TeamMembers = () => {
 
   

  return (
    <React.Fragment>
     
      <div className="container team-members-images">
        <div className="row">
          {teamMembers.map((member, index) => (
            // Inside your .map function rendering the team members
<div key={index} className="col-sm-4">
  <div className="team-member">
    <div className="member-wrapper">
      <img
        src={member.image}
        className={` ${member.role === 'Managing Director' 
        || member.role === 'Director (UAE)'
        || member.role === 'COO'
        || member.role === 'CEO' 
        || member.role === 'Cheif Infromation Officer'
        || member.role === 'Assistent Director (UAE)' 
        || member.role === 'Project manager' ? 'lead' : 'employee'}`}
        alt={member.name}
      />
      <div className="member-info text-center" style={{
        backgroundColor: '#DFA14A', 
        color: '#FEFEFE', 
        borderTopRightRadius: '40px',
        borderBottomLeftRadius: '40px',
        padding: '10px',
        
      }}>
        <h4>{member.name}</h4>
        <span>{member.role}</span>
        <p>{member.description}</p>
      </div>
    </div>
  </div>
</div>

          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamMembers;
