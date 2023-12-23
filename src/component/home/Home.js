import React from "react";
import ImageSlider from "../slider/ImageSlider";
import Event from "../day/Event";
import Couple from "../couple/Couple";
import MusicPlayer from "../music/MusicPlayer";
import Gallery from "../gallery/Gallery";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <Event />
      <Couple />
      <MusicPlayer />
      <Gallery />
    </div>
  );
};

export default Home;
