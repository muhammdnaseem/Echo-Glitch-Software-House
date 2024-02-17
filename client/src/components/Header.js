import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/header.css';
import logoImage from '../assets/images/logo-bg-remove.png';
import { FaWhatsapp } from "react-icons/fa";
import Downloads from './Downloads';
import {COLORS} from '../constants/Theme';
import { FaRegistered } from "react-icons/fa";
import brocheure from '../assets/pdfs/Brocheure.pdf';
import flyer from '../assets/pdfs/Flyer.pdf';
import companyprofile from '../assets/pdfs/Company Profile.pdf';

import { global_para, global_headings, servicesData } from '../constants/Contents';

function Header() {

     const showDropdown = (event) => {
     
            event.currentTarget.classList.add('show');
            event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
      
    };

    const hideDropdown = (event) => {
       
            event.currentTarget.classList.remove('show');
            event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
      
    };
  return (
    <Navbar expand="lg" className="bg-transparent" id="header">
      <Container>
    
        <Link to="/" className="logo-div">
        
      <img src={logoImage} alt="Logo" className="logo" />

 
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link to="/" className="nav-link">Home</Link>
             <Link to="/About" className="nav-link">About</Link>
               
               <a className="dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                   <Link to="/Services" className="nav-item nav-link" data-toggle="dropdown">Services</Link>
                                    <div className="dropdown-menu">
                                    
                                       

 {servicesData.map((service, index) => (
                      
                            <Link key={index} to={`/services#${service.serviceId}`} className="dropdown-item">{service.title}</Link>
                      
                        ))}


                                    </div>
                                </a>
                    
                <Link to="/LifeAtEG" className="nav-link">Life at EG</Link>
                 <Link to="/Career" className="nav-link">Career</Link>
                 <Link to="/Team" className="nav-link">Team</Link>
                 <Link to="/ContactUs" className="nav-link">Contact Us</Link>
                 
               <a className="dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                    <a href="#" className="nav-item nav-link" data-toggle="dropdown">Downloads</a>
                                    <div className="dropdown-menu">
                                      <a href={companyprofile} download="Company Profile.pdf" className="dropdown-item">Profile</a>
        <a href={flyer} download="Flyer.pdf" className="dropdown-item">Flyer</a>
        <a href={brocheure} download="Brocheure.pdf" className="dropdown-item">Brochure</a>
                                    </div>
                                </a>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Link className="whatsapp-link" to="https://wa.me/+923112669628?text=Hey, Please Tell me more about your company!!!">
      <div className="whatsapp">
      <FaWhatsapp />
      </div>
      </Link>
    </Navbar>
  );
}

export default Header;