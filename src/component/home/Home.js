import React from "react";
import ImageSlider from "../slider/ImageSlider";
import Event from "../day/Event";
import Couple from "../couple/Couple";
import MusicPlayer from "../music/MusicPlayer";
import Gallery from "../gallery/Gallery";
import Venue from "../when/Venue";
import Organize from "../orgnizer/Organize";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <Event />
      
      <Couple />
      <MusicPlayer />
      <Gallery />
      <Venue />
      <Organize />
    </div>
  );
};

export default Home;
