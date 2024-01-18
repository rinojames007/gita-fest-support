import React, { useState, useEffect } from "react";

const Hero = () => {
  const festStartDate = new Date("2024-02-19T08:00:00"); // Replace with your fest start date

  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = festStartDate - now;

    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(https://i.postimg.cc/ZKMKMRNm/cultural.webp)` }}
      className="flex justify-center items-center bg-no-repeat bg-cover bg-center h-screen w-full"
    >
      {/* left-contents */}
      <div className="left w-full mx-auto flex justify-center items-center ">
        <div className="flex flex-col items-center justify-center ">
          <div className="header text-center font-alkatra ">
            {/* <h1 id="shadowText" className="hero text-4xl sm:text-6xl font-bold text-white ">
              Welcome Back
            </h1> */}
            <img src="Gita-logo.png" alt="" className="w-[120px] md:w-[160px] pb-[20px] pt-[40px] mx-auto" />
            <span id="shadowText" className="text-5xl sm:text-8xl font-bold text-white ">
              Akanksha 2024!
            </span>
          </div>
          <span id="shadowText" className="text-4xl sm:text-8xl mt-4 font-bold text-white ">
              Support Team
            </span>

          <div className="desc flex flex-col justify-center items-center">
            {/* <p id="shadowText" className="py-5 text-md md:text-xl px-2 text-white font-semibold text-center ">
              Join us for a week full of excitement, learning and entertainment
            </p> */}

            <div className="timer ToGo mt-9  text-[#9FFFF5] font-semibold text-xl md:text-2xl text-center " >
              {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s <br/> to go
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
