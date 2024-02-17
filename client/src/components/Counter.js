import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/counter.css';
import SectionTitle from './SectionTitle';

const Counter = () => {
  return (
    <React.Fragment>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossOrigin="anonymous" />

      <section className="counter">
        <div className="container">
          <div className="counter__content">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item">
                  <div className="counter__item__text">
                    <i className="icon fas fa-project-diagram fa-3x"></i>
                    <h2 className="counter_num">230</h2>
                    <p>Completed Projects</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item second__item">
                  <div className="counter__item__text">
                    <i className="icon far fa-smile-beam fa-3x"></i>
                    <h2 className="counter_num">1068</h2>
                    <p>Happy clients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item third__item">
                  <div className="counter__item__text">
                    <i className="icon fas fa-chalkboard-teacher fa-3x"></i>
                    <h2 className="counter_num">230</h2>
                    <p>Perspective clients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counter__item four__item">
                  <div className="counter__item__text">
                    <i className="icon fas fa-list-alt fa-3x"></i>
                    <h2 className="counter_num">230</h2>
                    <p>Completed Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Counter;
