import React from "react";
import ImageSlider from "../slider/ImageSlider";
import Event from "../day/Event";
import Couple from "../couple/Couple";
import MusicPlayer from "../music/MusicPlayer";
import Gallery from "../gallery/Gallery";
import Venue from "../when/Venue";
import Organize from "../orgnizer/Organize";
import RsvpForm from "../mail/Rsvp";
import Gift from "../Gift/Gift";

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
      <Gift />
      <RsvpForm />
    </div>
  );
};

export default Home;
