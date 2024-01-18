import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import EventCard from "../Components/Events/EventCard";

const Anwesh = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
 
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  

  
  return (
    <div className=" min-h-screen w-screen bg-gradient-to-b from-black via-purple-900 to-black">
      <Navbar />
      {/* Tech Fest */}
      <div className=" pt-[60px] flex flex-col justify-center items-center w-full">
        <h1 className="text-5xl font-bold my-4 text-white">Anwesh</h1>
        <p className="text-sm mb-8 text-slate-200 px-2 text-center">
          Welcome to the gateway of innovation! Our Techfest Registration Page
          is your ticket to an exhilarating world of technology and creativity.
        </p>
        <div className="Event-Container w-full flex justify-around flex-wrap">
        <Link to="/anwesh/techEvents" className=" w-[95%] sm:w-[30%]">
          <EventCard name="Tech Fest" url={"https://i.postimg.cc/1Xy5R4wq/techfest.jpg"} />
        </Link>
        <Link to="/roboticsDetails" className=" w-[95%] sm:w-[30%]">
          <EventCard name="Robotics" url={"https://i.postimg.cc/y6rQB070/robotics.jpg"} />
        </Link>
          
        </div>
      </div>
      {showBackToTop && (
          <button
            className="fixed bottom-8 right-8 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={scrollToTop}
          >
            Back to Top
          </button>
        )}
    </div>
  );
};

export default Anwesh;
