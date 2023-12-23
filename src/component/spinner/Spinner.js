// Spinner.js
import React from "react";
// import { RingLoader } from "react-spinners";
import "./Spinner.css"; // add styling for spinner

import gif from "../../gif/l6.gif";

const Spinner = () => {
  return (
    <div className="spinner-container">
      {/* <RingLoader color={"#123abc"} loading={true} /> */}
      <img src={gif}  className="imger"  loading={true} />
    </div>
  );
};

export default Spinner;
