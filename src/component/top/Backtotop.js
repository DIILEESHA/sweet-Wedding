import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import "./back.css";
import { IoIosArrowUp } from "react-icons/io";

const CustomCursor = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 3000,
      smooth: "easeInOutQuad",
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowScrollButton(scrollY >= 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div className={`cursor ${showScrollButton ? "show" : ""}`}>
    //   <div className="imger" onClick={scrollToTop}>
    //     <div className="imger_set">
    //         d
    //     </div>
    //   </div>
    // </div>

    <div className={`scroller ${showScrollButton ? "show" : ""}`}>
      <div className="scroller_btn" onClick={scrollToTop}>
        <IoIosArrowUp className="toparrow" />
      </div>
    </div>
  );
};

export default CustomCursor;
