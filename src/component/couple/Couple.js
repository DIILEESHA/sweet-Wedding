import React from "react";
import "./couple.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Couple = () => {
  return (
    <div className="couple_container">
      <h2 className="couple_story" id="story">
        our story
      </h2>

      <img
        src="
      https://i.imgur.com/OA7vHkn.png"
        alt=""
        className="flower"
      />
      <p className="couple_para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quae
        fuga ipsum quaerat debitis vero suscipit unde maxime iusto
        necessitatibus placeat odit error earum. Officiis eaque, quo sunt
        dolorem quibusdam, aspernatur eum debitis deserunt nostrum in magnam
        amet rerum vero.
      </p>

      <div className="couple_solo_img_section">
        <div className="solo_img_card">
          <div className="solo_img_card2">
            <img
              className="hover_img"
              src="https://i.imgur.com/75rv7GJ.jpg"
              alt=""
            />
          </div>

          <h2 className="solo_name">Mr. JANITHA</h2>
          <div className="icon_set">
            <FaFacebook className="ico" />
            <FaTwitter className="ico" />

            <FaInstagram className="ico" />
          </div>
        </div>
        <div className="solo_img_card">
          <div className="solo_img_card2">
            <img
              className="hover_img"
              src="https://i.imgur.com/8epELHa.jpg"
              alt=""
            />
          </div>

          <h2 className="solo_name">Mrs. AMANDA</h2>

          <div className="icon_set">
            <FaFacebook className="ico" />

            <FaTwitter className="ico" />

            <FaInstagram className="ico" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
