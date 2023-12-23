import React, { useState, useEffect } from "react";
import "./count.css";

const WeddingCountdown = () => {
  const weddingDate = new Date("2024-01-12T00:00:00");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const currentDate = new Date();
    const timeDifference = weddingDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
  //   {timeRemaining.hours} HOURS {timeRemaining.minutes} MINS {timeRemaining.seconds} SECS
  return (
    <div className="card_container">
      <div className="card_time">
        <h1>{timeRemaining.days}</h1>
        DAYS
      </div>
      <div className="card_time">
        <h1>{timeRemaining.hours}</h1> HOURS
      </div>
      <div className="card_time">
        <h1>{timeRemaining.minutes}</h1> MINS
      </div>
      <div className="card_time">
        <h1>{timeRemaining.seconds}</h1> SECS
      </div>
    </div>
  );
};

export default WeddingCountdown;
