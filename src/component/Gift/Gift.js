import React from "react";
import "./gift.css";
import gif from "./gif.json";

const Gift = () => {
  return (
    <div className="gift_container">
      <h2 className="couple_story">Magical Touch</h2>

      <img src="https://i.imgur.com/OA7vHkn.png" alt="" className="flower" />

      <div className="gift_grid">
        {gif.map((g) => (
          <div className="gift_sub">
            <img className="gift_img" src={g.img} alt="" />
            <h2 className="gift_title2">{g.sub}</h2>
            <h2 className="gift_title">{g.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gift;
