import React, { useEffect, useState } from "react";
import EventUpdates from "../Components/Events-updates/EventUpdates";
import Events from "../Components/Events/Events";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Highlights from "../Components/Highlights/Highlights";
import Navbar from "../Components/Navbar/Navbar";

export default function Landing() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIframeLoad = () => {
    // Set loading to false when the iframe has finished loading
    setLoading(false);
  };

  const openWhatsApp = () => {
    // Replace the following URL with your WhatsApp chat link
    window.open(
      "https://whatsapp.com/channel/0029VaJmZcQ6BIEezcBq8U23",
      "_blank"
    );
  };

  const showPopUp = () => {
    // Show the pop-up message
    setShowPopup(true);
    // Hide the pop-up message after 3 seconds
    setTimeout(() => setShowPopup(false), 4200);
  };

  useEffect(() => {
    // Delay the initial display of the pop-up by 20 seconds
    const initialTimeout = setTimeout(() => {
      showPopUp();
    }, 2000);

    // Set up an interval to repeatedly show the pop-up every 20 seconds
    const interval = setInterval(() => {
      showPopUp();
    }, 20000);

    // Clear the interval when the component is unmounted
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []); // Ensure this effect runs only once

  return (
    <div
      onLoad={handleIframeLoad}
      className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen h-full"
    >
      {loading && (
        <div className="flex flex-col justify-center items-center h-[220px]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
          <div className="loader text-center text-white font-semibold text-xl mt-6 ">
            Loading...
          </div>
        </div>
      )}
      <Navbar />
      <Hero />
      <Events />
      
      <Footer />
    </div>
  );
}
