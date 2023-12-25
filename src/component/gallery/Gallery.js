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
      <h2 className="couple_story" id="our gallery">
        moment gallery
      </h2>

      <img src="https://i.imgur.com/OA7vHkn.png" alt="" className="flower" />

      <p className="couple_para">
        Dive into the enchanting 'Moment Gallery' — a visual journey through the
        joy, love, and cherished memories of our special day. Each photograph
        captures a unique story, a snapshot of the love and happiness that
        filled the air during our wedding celebration. Join us in reliving these
        extraordinary moments that will forever hold a special place in our
        hearts
      </p>

      <div className="gallery_grid">
        {gallerio.map((gal, index) => (
          <div className="gallery_sub" key={index}>
            <div className="image-overlay" onClick={() => openLightbox(index)}>
              <AiOutlinePlus className="plus-icon" />
            </div>
              <img
                className="cu"
                src={gal.url}
                loading="lazy"
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
