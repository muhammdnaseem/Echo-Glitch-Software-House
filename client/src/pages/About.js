import React from 'react';
import HeroComponent from '../components/HeroComponent';
import RightImageSection from '../components/RightImageSection';
import LeftImageSection from '../components/LeftImageSection';
import MultiSlider from '../components/MultiSlider';
import Achievement from '../components/Achievement';
import ServicesComponent from '../components/ServicesComponent';
import vission from '../assets/images/vission.jpg';
import mission from '../assets/images/mission.jpg';

import { COLORS, BG_COLORS, coloredHeadingPrimary } from '../constants/Theme';
import { global_para, global_headings, hero_section, skillsData } from '../constants/Contents';
import  '../assets/css/global.css';
import  '../assets/css/home.css';


function About() {

    const sliderImageUrlpaletinehotel = [
  //First image url
  {
    url:
      "https://d3i84mpjczjyrt.cloudfront.net/cache/img/bdbca8a7342787162b4a08ad6b6e93e6a0acb2dd-bdbca8-1980-1024-auto.jpg?q=1696597091",
      name: "Concentration",
      title: "Seminars",
      bookinglink: "https://app.mews.com/distributor/fab6991c-65ca-4599-84e0-ab6c011410bd?language=#lang",
        category: "Paletine Hotel"
  },
  {
    url:
      "https://d3i84mpjczjyrt.cloudfront.net/cache/img/platine-hotel-breakfast-176867-1280-600-portrait.jpg?q=1696597480",
      name: "Start the day on the right foot…",
      title: "Breakfast",
      bookinglink: "https://app.mews.com/distributor/fab6991c-65ca-4599-84e0-ab6c011410bd?language=#lang",
         category: "Paletine Hotel"
},
  
  {
    url:
      "https://d3i84mpjczjyrt.cloudfront.net/cache/img/d77bad9dae4dc1e98d84016a9705151c3aceaa7d-d77bad-1980-1024-auto.jpg?q=1696597057",
      name: "Relax…",
      title: "Fitness & Spa",
      bookinglink: "https://app.mews.com/distributor/fab6991c-65ca-4599-84e0-ab6c011410bd?language=#lang",  
         category: "Paletine Hotel" 
},
  //Third image url
  {
    url:
      "https://d3i84mpjczjyrt.cloudfront.net/cache/img/b607a1b38858851e4d0ad45c8a263afeba3e67a4-b607a1-1980-1024-auto.jpg?q=1696597057",
      name: "Chill out…",
      title: "Honesty Bar",
      bookinglink: "https://app.mews.com/distributor/fab6991c-65ca-4599-84e0-ab6c011410bd?language=#lang",
         category: "Paletine Hotel"
  },

  //Fourth image url

  {
  url:
      "https://d3i84mpjczjyrt.cloudfront.net/cache/img/platine-hotel-salle-de-jeux-176886-1280-600-portrait.jpg?q=1696597061",
      name: "Have fun…",
      title: "Games Room",
      bookinglink: "https://app.mews.com/distributor/fab6991c-65ca-4599-84e0-ab6c011410bd?language=#lang",
         category: "Paletine Hotel"
  },
];
  return (
    <React.Fragment>
  
   <div className="container">
   <HeroComponent 
   title1={hero_section.about_h1}
   title2={hero_section.about_h2}
   para={hero_section.about_para}
   aboutbutton="d-none"
   marginbottom="-100px"
   />

   <RightImageSection
   sectiontitle="OUR VISION" 
   description="To foresee the future of IT and promote the spread of technology, by making one tap easy to use solutions. We strive to create a seamless bridge between humanity and technology, ensuring accessibility and ease of use in every solution we develop. Our vision extends beyond mere innovation; we aim to inspire a global community to embrace technology confidently, fostering a culture where advancements are synonymous with simplicity and inclusivity. Through our commitment to continuous evolution and user-centric design, we envision a world where the potential of technology is unlocked effortlessly, enriching lives and driving progress for generations to come."
   image={vission}
   imageshape="hor-rectangle"
   name=""
   title=""
   listItems="d-none"
   />

   <LeftImageSection
   sectiontitle="OUR MISSION" 
   description="Learn and grow with our people to make great things together. We believe our people are our strength, and we are keen to lead them through the path and reach to the top with the virtues of teamwork, motivation, dedication and leadership. We are dedicated to fostering an environment that cultivates continuous learning, innovation, and personal growth. By nurturing a culture of collaboration, respect, and empowerment, we aim to not only achieve professional excellence but also create a community where every individual thrives and contributes to our collective success."
   image={mission}
   imageshape="hor-rectangle"
   name=""
   title=""
   />


<MultiSlider 
sectiontitle="OUR SKILLS"
slides={skillsData}
/>
   </div>
  
    </React.Fragment>
  );
}

export default About;
