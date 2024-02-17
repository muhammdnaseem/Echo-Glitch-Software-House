import React from 'react';
import '../assets/css/events.css';
import { eventsData, eventsDataVideos } from '../constants/Contents';

const Events = () => {
  return (
    <div className="awesome-portfolio-area fix">
      <div className="row awesome-portfolio-content" id="MixItUp68DC04">
        {eventsData.map((Items, index) => (
          <div key={index} className="col-sm-6 text-center container left-container">
            <figure className="snip1113 color">
              <img src={Items.image} alt="pr-sample1" />
              <figcaption>
                <h3>{Items.name}</h3>
                <h2>{Items.date}</h2>
              </figcaption>
            </figure>
          </div>
        ))}

        {eventsDataVideos.map((Items, index) => (
          <div key={index} className="col-sm-6 text-center container left-container">
            <figure className="snip1113 color">
              <video src={Items.video} autoPlay controls alt="pr-sample1" class="video" />
              <figcaption>
                <h3>{Items.name}</h3>
                <h2>{Items.date}</h2>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
