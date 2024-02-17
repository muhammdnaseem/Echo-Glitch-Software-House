import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroComponent from '../components/HeroComponent';
import RightImageSection from '../components/RightImageSection';
import LeftImageSection from '../components/LeftImageSection';
import { service1, service2, service3, service4, service5, service6, service7, service8, service9, servicesData, hero_section } from '../constants/Contents';
import '../assets/css/global.css';
import '../assets/css/home.css';

const useScrollToAnchor = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [hash]);
};

function Services() {
  useScrollToAnchor();

  const service1combinedPara = service1.description + ' ' + service1.para;
  const service2combinedPara = service2.description + ' ' + service2.para;
  const service3combinedPara = service3.description + ' ' + service3.para;
  const service4combinedPara = service4.description + ' ' + service4.para;
  const service5combinedPara = service5.description + ' ' + service5.para;
  const service6combinedPara = service6.description + ' ' + service6.para;
  const service7combinedPara = service7.description + ' ' + service7.para;
  const service8combinedPara = service8.description + ' ' + service8.para;
  const service9combinedPara = service9.description + ' ' + service9.para;

  return (
    <React.Fragment>
      <div className="container">
        <HeroComponent
          title1={hero_section.services_h1}
          title2={hero_section.services_h2}
          para={hero_section.services_para}
          aboutbutton="d-none"
          marginbottom="-100px"
        />

        <div className="" id={service1.serviceId}>
          <RightImageSection
            sectiontitle={service1.title}
            description={service1combinedPara}
            image={service1.image}
            name={service1.image_title}
            title=""
            listItems="d-none"
          />
        </div>

        <div className="" id={service2.serviceId}>
          <LeftImageSection
            sectiontitle={service2.title}
            description={service2combinedPara}
            image={service2.image}
            name={service2.image_title}
            title=""
          />
        </div>

        <div className="" id={service3.serviceId}>
          <RightImageSection
            sectiontitle={service3.title}
            description={service3combinedPara}
            image={service3.image}
            name={service3.image_title}
            title=""
            listItems="d-none"
          />
        </div>

        <div className="" id={service4.serviceId}>
          <LeftImageSection
            sectiontitle={service4.title}
            description={service4combinedPara}
            image={service4.image}
            name={service4.image_title}
            title=""
          />
        </div>


        <div className="" id={service5.serviceId}>
          <RightImageSection
            sectiontitle={service5.title}
            description={service5combinedPara}
            image={service5.image}
            name={service5.image_title}
            title=""
            listItems="d-none"
          />
        </div>

         <div className="" id={service6.serviceId}>
          <LeftImageSection
            sectiontitle={service6.title}
            description={service6combinedPara}
            image={service6.image}
            name={service6.image_title}
            title=""
          />
        </div>

        <div className="" id={service7.serviceId}>
          <LeftImageSection
            sectiontitle={service7.title}
            description={service7combinedPara}
            image={service7.image}
            name={service7.image_title}
            title=""
          />
        </div>

        <div className="" id={service8.serviceId}>
          <LeftImageSection
            sectiontitle={service8.title}
            description={service8combinedPara}
            image={service8.image}
            name={service8.image_title}
            title=""
          />
        </div>

        <div className="" id={service9.serviceId}>
          <LeftImageSection
            sectiontitle={service9.title}
            description={service9combinedPara}
            image={service9.image}
            name={service9.image_title}
            title=""
          />
        </div>

      </div>
    </React.Fragment>
  );
}

export default Services;
