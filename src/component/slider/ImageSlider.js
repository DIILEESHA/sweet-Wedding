import React from "react";
import Slider from "react-slick";
import Typewriter from "react-typewriter-effect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./CustomArrows";
import "./ImageSlider.css";
import { CiDesktopMouse2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import slid from "./slider.json";

const settings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 800,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  fade: true, // Set fade to true for a smooth transition
  cssEase: "linear", // Use linear easing for fade effect
  adaptiveHeight: true, // Adjust height dynamically
};
const ImageSlider = () => {
  return (
    <div className="slder">
      <div className="naver">
        <div className="nav">
          <div className="nav_left">
            <h2 className="nav_title">sweety</h2>
          </div>
          <div className="nav_right">
            <ul className="nav_ul">
              <li className="nav_li">
                home <CiHeart className="hearted" />{" "}
              </li>
              <li className="nav_li">
                our story <CiHeart className="hearted" />{" "}
              </li>
              <li className="nav_li">
                when & where <CiHeart className="hearted" />{" "}
              </li>
              <li className="nav_li">
                our gallery <CiHeart className="hearted" />{" "}
              </li>
              <li className="nav_li">
                event <CiHeart className="hearted" />{" "}
              </li>
              <li className="nav_li">
                rsvp <CiHeart className="hearted" />{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="slde_setting">
        <Slider {...settings}>
          {slid.map((doc, index) => (
            <div key={index.id} className="slide-container">
              <img alt={doc.title} src={doc.image} className="slide-image" />

              <div className="deta">
                <img src="https://i.imgur.com/6UgVzEQ.png" alt="" />

                <h2 className="deta_title">{doc.title}</h2>
                <h3 className="deta_name">Janitha & Amanda</h3>
                <Typewriter
                  className="deta_name" // Add your custom class here
                  options={{
                    strings: ["Janitha & Amanda"],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <img src="https://i.imgur.com/iThaubo.png" alt="" />
              </div>
              <div className="cursor"></div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
