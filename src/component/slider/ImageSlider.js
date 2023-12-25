import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Typewriter from "react-typewriter-effect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./CustomArrows";
import "./ImageSlider.css";
import { CiDesktopMouse2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import slid from "./slider.json";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const settings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:true,
  autoplay: true,
  autoplaySpeed: 1200,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  fade: true, // Set fade to true for a smooth transition
  cssEase: "linear", // Use linear easing for fade effect
  adaptiveHeight: true, // Adjust height dynamically
};

const ImageSlider = () => {
  const [open, isOpen] = useState(false);
  const [navbarSticky, setNavbarSticky] = useState(false);

  const handleClicks = () => {
    // Scroll to the top of the SingleItemDetail component
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClicksBottom = () => {
    // Scroll to the top of the SingleItemDetail component
    window.scrollTo({ bottom: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.innerWidth >= 960 && window.scrollY > 5) {
      setNavbarSticky(true);
    } else {
      setNavbarSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`slder ${navbarSticky ? "sticky" : ""}`}>
      <div className={`naver ${navbarSticky ? "sticky" : ""}`}>
        <div className={`nav ${navbarSticky ? "sticky" : ""}`}>
          <div className="nav_left">
            <h2 className={`nav_title ${navbarSticky ? "sticky" : ""}`}>
              Janitha & Amanda
            </h2>
          </div>
          <div className="nav_right">
            <ul className={`nav_ul ${navbarSticky ? "sticky" : ""}`}>
              {/* <li className="nav_li">
                home <CiHeart className="hearted" />{" "}
              </li> */}
              <li className="nav_li">
                <ScrollLink
                  to="story" // Specify the ID of the target element (footer in this case)
                  spy={true}
                  smooth={true}
                  style={{ cursor: "pointer" }}
                  offset={-70}
                  duration={1500}
                >
                  our story{" "}
                  <CiHeart
                    className={`hearted ${navbarSticky ? "sticky" : ""}`}
                  />{" "}
                </ScrollLink>
              </li>
              <li className="nav_li">
                <ScrollLink
                  to="when & where" // Specify the ID of the target element (footer in this case)
                  spy={true}
                  smooth={true}
                  style={{ cursor: "pointer" }}
                  offset={-70}
                  duration={1500}
                >
                  when & where{" "}
                  <CiHeart
                    className={`hearted ${navbarSticky ? "sticky" : ""}`}
                  />{" "}
                </ScrollLink>
              </li>
              <li className="nav_li">
                <ScrollLink
                  to="our gallery" // Specify the ID of the target element (footer in this case)
                  spy={true}
                  smooth={true}
                  style={{ cursor: "pointer" }}
                  offset={-70}
                  duration={1500}
                >
                  our gallery{" "}
                  <CiHeart
                    className={`hearted ${navbarSticky ? "sticky" : ""}`}
                  />{" "}
                </ScrollLink>
              </li>

              <li className="nav_li">
                <ScrollLink
                  to="rsvp" // Specify the ID of the target element (footer in this case)
                  spy={true}
                  smooth={true}
                  style={{ cursor: "pointer" }}
                  offset={-70}
                  duration={1500}
                >
                  rsvp{" "}
                  <CiHeart
                    className={`hearted ${navbarSticky ? "sticky" : ""}`}
                  />{" "}
                </ScrollLink>
              </li>
            </ul>

            <ul className="ela">
              <li className="right_l" onClick={() => isOpen(!open)}>
                Menu
              </li>
            </ul>
          </div>
          <div
            className="mobile_ul_section"
            style={{ right: open ? "0px" : "-50000vw" }}
          >
            <ul className="mobile_ul">
              <div className="mobala">
                <li
                  className="mobile_li"
                  onClick={() => handleClicks && isOpen(!open)}
                >
                  work
                </li>
                <li
                  className="mobile_li"
                  onClick={() => handleClicks && isOpen(!open)}
                >
                  service
                </li>
                <li
                  className="mobile_li"
                  onClick={() => handleClicks && isOpen(!open)}
                >
                  culture
                </li>
                <li
                  className="mobile_li"
                  onClick={() => handleClicksBottom && isOpen(!open)}
                >
                  contact
                </li>
              </div>

              <div className="susa">
                <h6
                  style={{
                    fontSize: "11px",
                    fontSmooth: "small",

                    fontWeight: "500",
                    lineHeight: "1.6",
                  }}
                >
                  © 2023
                  <del style={{ margin: "0px 5px" }}>10ISLANDS © 2023.</del>
                  <br /> Made with passion by DILLEESHA
                </h6>
              </div>
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
