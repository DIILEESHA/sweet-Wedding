import React from "react";
import "./event.css";
import WeddingCountdown from "./countdown/WeddingCountdown";

const Event = () => {
  return (
    <div className="event_container">
      <div className="event_detail_container">
        <h2 className="couple_story">January 12th, 2024</h2>
        <p className="event_para1">We Are Getting Married</p>{" "}
        <p className="event_para">YOU ARE INVITED!</p>
      <img src="https://i.imgur.com/OA7vHkn.png" alt="" className="flower" />

        <WeddingCountdown />
        <div className="event_bottom">
          <img src="https://i.imgur.com/2fGT61B.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Event;
