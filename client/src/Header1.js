import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/header1.css';

function Header1() {

     const [isTop, setIsTop] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Handle scroll event
    useEffect(() => {
        const onScroll = () => {
            setIsTop(window.scrollY < 200);
        };

        // Add event listener
        window.addEventListener('scroll', onScroll);

        // Clean up
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Handle window resize event
    useEffect(() => {
        const onResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('resize', onResize);
    }, []);


    const showDropdown = (event) => {
        if (windowWidth >= 768) {
            event.currentTarget.classList.add('show');
            event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
        }
    };

    const hideDropdown = (event) => {
        if (windowWidth >= 768) {
            event.currentTarget.classList.remove('show');
            event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
        }
    };

    return (
        <>
            <header className="header-area overlay">
                <nav className={`navbar ${!isTop ? 'fixed-top' : ''}`} >
                    <div className="container">
                        <Link to="/" className="navbar-brand">Bootdey.com</Link>
                        
                        <ul className="navbar-nav ml-auto">
                                <li><Link to="/" className="nav-item nav-link active text-white">Home</Link></li>
                                <li><Link to="/about" className="nav-item nav-link">About Us</Link></li>
                                <li className="dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                    <a href="#" className="nav-item nav-link" data-toggle="dropdown">Services</a>
                                    <div className="dropdown-menu">
                                        <Link to="/service1" className="dropdown-item">Dropdown Item 1</Link>
                                        <Link to="/service2" className="dropdown-item">Dropdown Item 2</Link>
                                        <Link to="/service3" className="dropdown-item">Dropdown Item 3</Link>
                                    </div>
                                </li>
                             
                            </ul>
                        <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
                            <span className="menu-icon-bar"></span>
                            <span className="menu-icon-bar"></span>
                            <span className="menu-icon-bar"></span>
                        </button>

                        <div id="main-nav" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li><Link to="/" className="nav-item nav-link active text-white">Home</Link></li>
                                <li><Link to="/about" className="nav-item nav-link">About Us</Link></li>
                                <li className="dropdown" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                    <a href="#" className="nav-item nav-link" data-toggle="dropdown">Services</a>
                                    <div className="dropdown-menu">
                                        <Link to="/service1" className="dropdown-item">Dropdown Item 1</Link>
                                        <Link to="/service2" className="dropdown-item">Dropdown Item 2</Link>
                                        <Link to="/service3" className="dropdown-item">Dropdown Item 3</Link>
                                    </div>
                                </li>
                             
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </header>

           
        </>
    );
}

export default Header1;
