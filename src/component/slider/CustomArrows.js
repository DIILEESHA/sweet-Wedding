// CustomArrows.jsx
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

import { MdChevronRight } from "react-icons/md";

import "./ImageSlider.css";

const Arrow = ({ direction, onClick }) => {
  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    cursor: "pointer",
    color: "#ddd", // Arrow color
    padding: "0px 10px",
  };

  return (
    <div style={{ ...arrowStyles, [direction]: 10 }} onClick={onClick}>
      {direction === "left" ? (
        <MdOutlineKeyboardDoubleArrowLeft className="for" />
      ) : (
        <MdOutlineKeyboardDoubleArrowRight className="for" />
      )}
    </div>
  );
};

const PrevArrow = ({ onClick }) => <Arrow direction="left" onClick={onClick} />;
const NextArrow = ({ onClick }) => (
  <Arrow direction="right" onClick={onClick} />
);

export { PrevArrow, NextArrow };
