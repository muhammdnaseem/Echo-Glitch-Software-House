import React from 'react';

import Header from './components/Header';

import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainRouter from './router/MainRouter';
import About from './pages/About';
import Services from './pages/Services';
import LifeAtEG from './pages/LifeAtEG';
import Career from './pages/Career';
import Team from './pages/Team';
import ContactUs from './pages/ContactUs';

import { global_para, global_headings, servicesData } from './constants/Contents';


function App() {
  return (
   <React.Fragment >
   <Router>

     
      <Header />
   <Routes>
   <Route   path="/" element={<Home />} />
      <Route   path="/About" element={<About />} />
      <Route   path="/Services" element={<Services />} />
      <Route   path="/LifeAtEG" element={<LifeAtEG />} />
      <Route   path="/Career" element={<Career />} />
      <Route   path="/Team" element={<Team />} />
      <Route   path="/ContactUs" element={<ContactUs />} />
    
    </Routes>
      <Footer />
       </Router>
    </React.Fragment>
  );
}

export default App;
