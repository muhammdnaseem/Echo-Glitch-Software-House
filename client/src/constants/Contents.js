import '../assets/css/global.css';
import software from '../assets/images/servicesicons/Software Development.png';
import website from '../assets/images/servicesicons/Website.png';
import websiteimage from '../assets/images/servicesicons/website-development1.jpg';

import graphic from '../assets/images/servicesicons/Graphic.png';
import graphicimage from '../assets/images/servicesicons/graphic-design.jpg';
import maintenancesupportiamge from '../assets/images/servicesicons/maintinance_support.png';
import maintenancesupport from '../assets/images/servicesicons/Maintenance & Support-01.png';
import digitalmarketingimage from '../assets/images/servicesicons/digital-marketing.jpg';
import digitalmarketing from '../assets/images/servicesicons/Digital Marketing.png';
import cloudsolutions from '../assets/images/servicesicons/Cloud Solutions.png';
import businessimage from '../assets/images/servicesicons/business-solution.jpg';
import blockchain from '../assets/images/servicesicons/Blockchain Development.png';
import blockchainimage from '../assets/images/servicesicons/blockchain1.jpg';
import ecommerceicon from '../assets/images/servicesicons/E-commerce Solutions.png';
import ecommerceimage from '../assets/images/servicesicons/e-commerce.jpg';
import ai from '../assets/images/servicesicons/AI & Machine learning.png';
import aiimage from '../assets/images/servicesicons/artificial-intillegence.jpg';
import flutter from '../assets/images/servicesicons/Flutter.png';
import appimage from '../assets/images/servicesicons/app-development3.jpg';
import logoimage from '../assets/images/logo.jpeg';
import hamidimage from '../assets/images/team/hamidimage.jpeg';
import amirimage from '../assets/images/team/Amir Image.png';
import imranimage from '../assets/images/team/imrandanish.jpeg';
import naseemimage from '../assets/images/team/naseemimage.png';
import naseemimage2 from '../assets/images/team/naseemprofile.jpeg';
import mehdiimage from '../assets/images/team/Mehdihassanimage.jpg';
import kashifimage from '../assets/images/team/kashifimage.png';
import kamranimage from '../assets/images/team/kamranimage.jpeg';
import naumanimage from '../assets/images/team/nauman.jpeg';
import salmanimage from '../assets/images/team/salman.png';
import nabeelimage from '../assets/images/team/nabeel.jpeg';
import ahsanalyasimage from '../assets/images/team/ahsan.JPG';
import waziruddinimage from '../assets/images/team/m-waziruddin-ansari.jpeg';
import muhammadnaumanimage from '../assets/images/team/muhammadnauman.jpeg';
import muhammadatifimage from '../assets/images/team/muhammadatif.jpeg';
import mauzimage from '../assets/images/team/mauz.jpeg';
import zobiajabeen from '../assets/images/team/zobiajabeen.png';
import mdimage from '../assets/images/team/mdprofile.jpeg';


import galleryimage1 from '../assets/images/gallery-1.png';
import galleryimage2 from '../assets/images/gallery-2.png';
import galleryimage3 from '../assets/images/gallery-3.png';
import galleryimage4 from '../assets/images/gallery-4.png';
import galleryimage5 from '../assets/images/gallery-5.png';
import galleryimage6 from '../assets/images/gallery-6.png';
import event1 from '../assets/images/event1.jpeg';
import event2 from '../assets/images/event2.jpeg';
import event3 from '../assets/images/event3.jpeg';
import event4 from '../assets/images/event4.jpeg';
import video1 from '../assets/images/video1.mp4';
import video2 from '../assets/images/video2.mp4';

import skillimage1 from '../assets/images/skill-1.png';
import skillimage2 from '../assets/images/skill-2.png';
import skillimage3 from '../assets/images/skill-3.png';
import skillimage4 from '../assets/images/skill-4.png';
import skillimage5 from '../assets/images/skill-5.png';
import skillimage6 from '../assets/images/skill-1.png';



import { COLORS, BG_COLORS, coloredHeadingPrimary, headingPrimary, para_style } from '../constants/Theme';

export const logo = {
    logo: logoimage,
}
export const global_headings = {
  about: "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  ceo_message: "",
  app_development_description: "",
  digital_marketing_description: "",
  ahead_technology_description: "",
};

export const work_data = {
  downloads: "350K+",
  published_apps: "100K+",
  apps: "225+",
  team_members: "75+",
}
export const hero_section = {
  home_h1: "POWERFUL AND EASY TO USE",
  home_h2: "APP CREATION",
  home_h3: "PLATFORM",
  home_para: `Since its inception in 2020, Echo Glitch Technologies has reached a ${work_data.downloads} combined download volume of ${work_data.apps} apps and games on Google Play Store with an ever increasing upward trend.`,
  about_h1: "WE ARE A ONE STOP SOLUTION FOR ALL YOUR",
  about_h2: "MOBILE DEVELOPMENT IDEAS",
  about_para: "Development of an application starts with an idea; an idea is all what it takes. But that idea needs a vision and mission to be turned into reality.",
  services_h1: "WE ARE SPECIALIZED IN",
  services_h2: "WEBSITE, APP DEVELOPMENT & DIGITAL MARKETING",
  services_para: "We believe the only way to do great work is to love what you do, and we put our heart in whatever job we do.",
  life_echoglitch_h1: "LIFE AT ",
  life_echoglitch_h2: " ECHO GLITCH",
  life_echoglitch_para: "Apart from high work and opportunities for leadership development , the events of the Echo Glitch family has often been cited as a major reason why Echo Glitch is a top choice for professionals around Pakistan",
  career_h1: "WHY JOIN",
  career_h2: "ECHO GLITCH ?",
  career_h3: "",
  career_para: "Techies, innovators, developers, and free-thinkers… you’ve come to the right place. Echo Glitch Technologies has been delivering premium IT-enabled business solutions to a wide array of client organizations for over four decades. We have remained at the cutting edge of enterprise technology by making employee excellence our top priority. We believe in cultivating a working environment that supports innovation and creative thinking. We give you opportunities to excel and achieve the global recognition that you deserve!",
  career_colored_para: "",
  team_h1: "ECHO GLITCH",
  team_h2: "TEAM",
  team_para: "Our diverse and passionate team of tech enthusiasts is driven by a shared commitment to excellence, innovation, and problem-solving, propelling us forward in shaping the future of technology",
}
export const ColoredHeroSection = ({ mainText, coloredText, secondText }) => {
  const coloredTextStyle = { color: 'red' };

  return (
    <h1>
     <span className="primary-heading">{mainText}</span>
<span className="secondary-heading">{coloredText}</span>
<span className="third-heading">{secondText}</span>

    </h1>
  );
};
export const global_para = {
  achivemients: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",

  about: "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  app_development_description: "",
  digital_marketing_description: "",
  ahead_technology_description: "High Tech but with simplicity garnished on top, our strength is in our teamwork with a solid belief in “We Can” rather than “I Can”. Moving ahead as a team Echo Glitch is providing premier development services in mobile applications & games, web services with E-Commerce, python prowess, 3D Modelling and iOS Development. These skills are spiced up with the latest digital marketing trends. And Echo Glitch has surprisingly exceeded its annual sales targets for all its services using the latest digital marketing trends like a wizard in –",
  achievement_para: "From a single team over the years, we are now global and known as Echo Glitch Group of companies with 23 subsidiaries in United Kingdom, Australia, United Arab Emirates and Pakistan.",
  ceo_message: " I am thrilled to welcome you to our digital hub, where innovation meets excellence. Our passionate team is dedicated to delivering cutting-edge software solutions that empower your business in this dynamic digital age. We believe in creating value through technology, ensuring every project we undertake is a step towards your success. Thank you for choosing us as your trusted technology partner.",
  md_message: "As we navigate the ever-evolving landscape of technology, your dedication and expertise continue to drive our success. Your commitment to innovation and excellence are the cornerstones of our achievements. Together, let's push boundaries, create exceptional solutions, and continue to lead the way in delivering cutting-edge software solutions that make a difference.",
};

export const listItems = [
  'Digital Market Research and PinPoint Analytic’s',
  'App Search Optimization',
  'Apps Marketing',
  'Search Engine Optimization',
  'Social Media Marketing',
  'Ad optimization on display networks like Google, Facebook and Bing.',
  'Ad monetization with Admob, Facebook and related mediation ad networks.',
];

export const galleryimages = [
  galleryimage1,
  galleryimage5,
  galleryimage3,
  galleryimage4,
  galleryimage3,
  galleryimage4,
  galleryimage5,
  galleryimage1,
  
  
 
];


export const servicesData = [
  {
    title: 'Website Development',
    description: 'Creating visually appealing and user-friendly websites, while ensuring optimal performance and functionality.',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: software,
    image: websiteimage,
    image_title: "Website Development Team",
    serviceId: "website",
  },
  {
    title: 'Digital Marketing',
    description: 'Employing strategic online marketing techniques to enhance brand visibility, engage audiences, and drive business growth.',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: digitalmarketing,
    image: digitalmarketingimage,
    image_title: "Digital Marketing Team",
    serviceId: "digital",
  },
  {
    title: 'App Development',
    description: 'Designing and coding mobile applications for seamless user experiences across diverse platforms.',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: flutter,
    image: appimage,
    image_title: "App Development Team",
    serviceId: "app",
  },
  {
    title: 'Graphic Designing',
    description: 'Bringing ideas to life through visually stunning graphics and illustrations that captivate and communicate effectively.',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: graphic,
    image: graphicimage,
    image_title: "Graphic Designing Team",
    serviceId: "graphic",
  },
  {
    title: 'Blockchain Development',
    description: 'Blockchain development is a specialized field of software development that focuses on creating and implementing applications using blockchain technology',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: blockchain,
    image: blockchainimage,
    image_title: "Blockchain Team",
    serviceId: "blockchain",
  },
  
  {
    title: 'Business Solution',
    description: 'Empowering your business with innovative solutions to drive growth and efficiency in the digital age.Tailored business solutions for sustained success and competitive advantage.',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: cloudsolutions,
    image: businessimage,
    image_title: "Business Solution Team",
    serviceId: "business",
  },
  {
    title: 'Software Development',
    description: 'Crafting innovative code solutions to meet specific needs and enhance overall system functionality.',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: software,
    image: websiteimage,
    image_title: "Software Development Team",
    serviceId: "software",
  },
  
  {
    title: 'E-Commerce Solutions',
    description: 'Developing robust online platforms that facilitate secure transactions, smooth user interactions, and efficient inventory management.',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: cloudsolutions,
    image: ecommerceimage,
    image_title: "E-Commerce Team",
    serviceId: "e-commerce",
  },
  {
    title: 'Maintenance & Support',
    description: 'Providing ongoing care and technical assistance to ensure software and systems operate smoothly, minimizing downtime.',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: maintenancesupport,
    image: maintenancesupportiamge,
    image_title: "Maintenance & Support Team",
    serviceId: "maintenance-support",
  },

  
];



export const service1 = {
  title: 'Website Development',
  description: 'Creating visually appealing and user-friendly websites, while ensuring optimal performance and functionality.',
  para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
  icon: software,
  image: websiteimage,
  image_title: "Website Development Team",
  serviceId: "website",
};

export const service2 = {
  title: 'Digital Marketing',
  description: 'Employing strategic online marketing techniques to enhance brand visibility, engage audiences, and drive business growth.',
  para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
  icon: digitalmarketing,
  image: digitalmarketingimage,
  image_title: "Digital Marketing Team",
  serviceId: "digital",
};

export const service3 = {
  title: 'App Development',
    description: 'Designing and coding mobile applications for seamless user experiences across diverse platforms.',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: flutter,
    image: appimage,
    image_title: "App Development Team",
    serviceId: "app",
};

export const service4 = {
  title: 'Graphic Designing',
    description: 'Bringing ideas to life through visually stunning graphics and illustrations that captivate and communicate effectively.',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: graphic,
    image: graphicimage,
    image_title: "Graphic Designing Team",
    serviceId: "graphic",
};

export const service5 = {
  title: 'Blockchain Development',
    description: 'Blockchain development is a specialized field of software development that focuses on creating and implementing applications using blockchain technology',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: blockchain,
    image: blockchainimage,
    image_title: "Blockchain Team",
    serviceId: "blockchain",
};

export const service6 = {
  title: 'Business Solution',
    description: 'Empowering your business with innovative solutions to drive growth and efficiency in the digital age.Tailored business solutions for sustained success and competitive advantage.',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: cloudsolutions,
    image: businessimage,
    image_title: "Business Solution Team",
    serviceId: "business",
};

export const service7 = {
  title: 'Software Development',
    description: 'Crafting innovative code solutions to meet specific needs and enhance overall system functionality.',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: software,
    image: websiteimage,
    image_title: "Software Development Team",
    serviceId: "software",
};

export const service8 = {
  title: 'E-Commerce Solutions',
    description: 'Developing robust online platforms that facilitate secure transactions, smooth user interactions, and efficient inventory management.',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: cloudsolutions,
    image: ecommerceimage,
    image_title: "E-Commerce Team",
    serviceId: "e-commerce",
};

export const service9 = {
  title: 'Maintenance & Support',
    description: 'Providing ongoing care and technical assistance to ensure software and systems operate smoothly, minimizing downtime.',
    para: "Echo Glitch Technologies is a tech giant in the world of Information technology. Echo Glitch is providing premier services in mobile application. The mobile application services involve the development of all types of technical and general applications. In short, we believe in ease, and we ease up your life through our unique innovative technological services. We are the whole nine yards’ software developers, dealers and solution providers.",
    icon: maintenancesupport,
    image: maintenancesupportiamge,
    image_title: "Maintenance & Support Team",
    serviceId: "maintenance-support",
};

export const skillsData = [
  {
    title: 'WEBSITE DEVELOPMENT',
    image: skillimage1,
  },
  {
    title: 'WEBSITE DEVELOPMENT',
    image: skillimage2,
  },
  {
    title: 'WEBSITE DEVELOPMENT',
    image: skillimage3,
  },
  {
    title: 'WEBSITE DEVELOPMENT',
    image: skillimage4,
  },
  {
    title: 'WEBSITE DEVELOPMENT',
    image: skillimage5,
  },
  {
    title: 'WEBSITE DEVELOPMENT',
    image: skillimage6,
  },
  
];


export const eventsData = [
  {
    image: "https://i.ytimg.com/vi/YsYCZcB-FCU/maxresdefault.jpg",
    name: 'Celebration',
    date: "14 August 2023",
  },
  {
    image: event1,
    name: 'Birthday Celebration',
    date: "4 Jan 2024",
  },
  {
    image: event2,
    name: 'Birthday Celebration',
    date: "4 Jan 2024",
  },
  {
    image: event3,
    name: 'Birthday Celebration',
    date: "4 Jan 2024",
  },
  {
    image: event4,
    name: 'Birthday Celebration',
    date: "4 Jan 2024",
  },

];

export const eventsDataVideos = [
 
 
  {
    video: video2,
    name: "Company Services",
    date: "1 Jan 2024",
    
  },
];




export const team = {
  CEO_name: "",
  MD_name: "",
  App_developer: "",
  Graphic_designer: "",
};


 export const teamMembers = [
   {
      name: 'Syed Muhammad Hamid Gillani',
      role: 'CEO',
      image: hamidimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },
    {
      name: 'Muhammad Awais',
      role: 'Managing Director',
      image: mdimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },

    {
      name: 'Muhammad Amir Mushtaq',
      role: 'Cheif Infromation Officer',
      image: amirimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },

     {
      name: 'Ahsan Ilyas',
      role: 'Director (UAE)',
      image: ahsanalyasimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },
    {
      name: 'Zobia Jabeen',
      role: 'Assistent Director (UAE)',
      image: zobiajabeen,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },
    

    {
      name: 'Muhammad Waziruddin Ansari',
      role: 'COO',
      image: waziruddinimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },
    
    {
      name: 'Muhammad Kashif Ayub',
      role: 'Project manager',
      image: kashifimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },

   

    {
      name: 'Muhammad Naseem',
      role: 'Senior Website Developer',
      image: naseemimage2,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },

    {
      name: 'Nabeel Hassan',
      role: 'Junior Website Developer',
      image: nabeelimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },

    {
      name: 'Mauz Ahmed',
      role: 'Junior App Developer',
      image: mauzimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },

     

    {
      name: 'Kamran Khan',
      role: 'Senior Digital Marketer',
      image: kamranimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },
    
    {
      name: 'Mehdi Hassan',
      role: 'Graphic Designer',
      image: mehdiimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },

    {
      name: 'Muhammad Salman',
      role: 'Graphic Designer',
      image: salmanimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },
    
    
    
    {
      name: ' Salahuddin',
      role: 'Architecture',
      image: naumanimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },

    {
      name: 'Imran Danish',
      role: 'Junior Digital Marketer',
      image: imranimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },

    {
      name: 'Muhammad Nauman',
      role: 'Senior Freelauncer',
      image: muhammadnaumanimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },

    {
      name: 'Muhammad Atif',
      role: 'Junior Freelauncer',
      image: muhammadatifimage,
      social: ['twitter', 'facebook', 'instagram', 'linkedin'],
      description: '',
    },
    
  ];