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
                <img
                  className="hover-image"
                  src="https://onelove.catanisthemes.com/wp-content/uploads/2017/02/home19-groom.jpg"
                  alt=""
                />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.6560525938094!2d80.41288367386053!3d8.336931699440363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf508d0caa33f%3A0x381425a8aa4887a5!2sThe%20Lakeside%20Hotel%20at%20Nuwarawewa!5e0!3m2!1sen!2slk!4v1703409313799!5m2!1sen!2slk"
            width="100%"
            height="450"
            style={{
              filter: "brightness(80%) contrast(100%)",

              border: "none",

              // Adjust values based on your preference
              /* Add any additional styles here */
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
