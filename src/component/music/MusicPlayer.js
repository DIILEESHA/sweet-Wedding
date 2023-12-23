import { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import "./music.css";

const MusicPlayer = () => {
  const [audio] = useState(new Audio("/music.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const storedIsPlaying = localStorage.getItem("isPlaying");
    if (storedIsPlaying) {
      setIsPlaying(JSON.parse(storedIsPlaying));
    } else {
      // Autoplay the music when the component mounts
      setIsPlaying(true);
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    localStorage.setItem("isPlaying", JSON.stringify(isPlaying));
  }, [isPlaying, audio]);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className="music-player">
      <button className="music_btn" onClick={handlePlayPause}>
        {isPlaying ? <FaPause className="de"/> : <FaPlay className="de"/>}
      </button>
    </div>
  );
};

export default MusicPlayer;
