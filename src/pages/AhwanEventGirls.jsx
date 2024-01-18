import React, { useEffect, useState } from "react";

import Navbar from "../Components/Navbar/Navbar";

const AhwanEventGirls = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    // Add an event listener to check scroll position
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 700); // Change 200 to adjust when the button appears
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener on component unmount
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

  const handleIframeLoad = () => {
    // Set loading to false when the iframe has finished loading
    setLoading(false);
  };

  return (
    <div className="h-full min-h-screen w-full bg-gradient-to-b from-black via-purple-900 to-black">
      <Navbar />
      <div className="py-20">
        <h1 className="text-white text-center font-bold md:text-5xl text-2xl my-5">
          Ahwan Girls Events
        </h1>
        {loading && (
          <div className="flex flex-col justify-center items-center h-[220px]">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
            <div className="loader text-center text-white font-semibold text-xl mt-6 ">Loading...</div>
          </div>
        )}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeCcGs3GKxDAm64VDbs6X-aldGip-_l8FaSYvnn4WDJSD973w/viewform?embedded=true"
          className="mx-auto w-full md:w-2/3 lg:w-1/2"
          height="2370"
          onLoad={handleIframeLoad}
        >
          Loading…
        </iframe>
          <p className="UpcommingEvents text-2xl md:text-4xl font-bold text-white text-center pt-[80px]">To be Announced...</p>

      </div>

      {/* Back to Top Button */}
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

export default AhwanEventGirls;
