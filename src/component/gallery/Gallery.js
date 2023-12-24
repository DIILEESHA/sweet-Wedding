import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import { AiOutlinePlus } from "react-icons/ai";
import "react-image-lightbox/style.css";
import gallerio from "./gallerio.json";
import "./gallery.css";

const GalleryComponent = () => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const images = gallerio.map((gal) => gal.url);

  return (
    <div className="gallery_container">
      <h2 className="couple_story">moment gallery</h2>

      <img src="https://i.imgur.com/OA7vHkn.png" alt="" className="flower" />

      <p className="couple_para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quae
        fuga ipsum quaerat debitis vero suscipit unde maxime iusto
        necessitatibus placeat odit error earum.
      </p>

      <div className="gallery_grid">
        {gallerio.map((gal, index) => (
          <div
            className="gallery_sub"
         
            key={index}
          >
            <div className="image-overlay" onClick={() => openLightbox(index)}>
              <AiOutlinePlus className="plus-icon" />
            </div>
            <img
              className="cu"
              src={gal.url}
              alt=""
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIsOpen && (
        <Lightbox
          mainSrc={images[currentImage]}
          nextSrc={images[(currentImage + 1) % images.length]}
          prevSrc={images[(currentImage + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default GalleryComponent;
