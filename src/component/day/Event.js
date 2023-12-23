import React from "react";
import "./event.css";
import WeddingCountdown from "./countdown/WeddingCountdown";

const Event = () => {
  return (
    <div className="event_container">
      <div className="event_detail_container">
        <h2 className="evnt_date">June 20th, 2018</h2>
        <p className="event_para">
          HYATT REGENCY GREENVILLE
          <br />
          220 NORTH MAIN STREET
        </p>
        <WeddingCountdown />
        <div className="event_bottom">
          <img src="https://i.imgur.com/2fGT61B.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Event;
