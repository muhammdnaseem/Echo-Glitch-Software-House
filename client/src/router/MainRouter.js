// routers/HomeRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import LifeAtEG from '../pages/LifeAtEG';
import Career from '../pages/Career';
import Team from '../pages/Team';
import ContactUs from '../pages/ContactUs';

const MainRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Services" element={<Services />} />
      <Route exact path="/LifeAtEG" element={<LifeAtEG />} />
      <Route exact path="/Career" element={<Career />} />
      <Route exact path="/Team" element={<Team />} />
      <Route exact path="/ContactUs" element={<ContactUs />} />
    </Routes>
  );
};

export default MainRouter;
