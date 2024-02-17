import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../assets/css/multislider.css';
import SectionTitle from './SectionTitle';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1
  },
};


const MultiSlider = ({ slides, sectiontitle }) => {
  return (
       <div className="row">
    <div className="parent  text-center mt-5">
     <SectionTitle title={sectiontitle} sectiondescription=""/>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListclassName="custom-dot-list-style"
        className="d-flex"
      >
      
        {slides.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.image} className="slider-image" alt="movie" />
              <div className="multi-slider-content">
             
              </div>
              
            </div>
          );
        })}
      </Carousel>
      </div>
    </div>
  );
};
export default MultiSlider;
