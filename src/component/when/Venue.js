import React from "react";
import "./venue.css";

import ven from "./ven.json";

const Venue = () => {
  return (
    <div className="ver">
      <div className="venue_container">
        <h2 className="couple_story" id="when & where">
          When & Where
        </h2>

        <img src="https://i.imgur.com/OA7vHkn.png" alt="" className="flower" />

        <div className="venue_grid">
          {ven.map((gal, index) => (
            <div className="hover-container">
              <div className="venue_sub_grid" key={index}>
                <img className="hover-image" src={gal.sec} alt="" />
                <img className="venue_img" src={gal.url} alt="" />

                <h2 className="venue_title">{gal.text}</h2>
                <h3 className="venue_other">{gal.day}</h3>
                <h3 className="venue_other">{gal.time}</h3>
                <h3 className="venue_other">{gal.address}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.818952832443!2d80.38435977386047!3d8.320782199675003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf4359e2c234d%3A0x58bc8c2df30a287f!2sGolden%20Mango!5e0!3m2!1sen!2slk!4v1703436172055!5m2!1sen!2slk"
            width="100%"
            height="450"
            style={{
              filter: "brightness(80%) contrast(100%)",

              border: "none",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Venue;
