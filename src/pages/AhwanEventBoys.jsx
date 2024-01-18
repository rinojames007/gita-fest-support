import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";

const AhwanEventBoys = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY >700);
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

  const handleIframeLoad = () => {
    // Set loading to false when the iframe has finished loading
    setLoading(false);
  };

  return (
    <div className="h-full min-h-screen w-full bg-gradient-to-b from-black via-purple-900 to-black">
      <Navbar />
      <div className="py-20">
        <h1 className="text-white text-center font-bold md:text-5xl text-2xl my-5">
          Ahwan Boys Events
        </h1>

       {loading && (
          <div className="flex flex-col justify-center items-center h-[220px]">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
            <div className="loader text-center text-white font-semibold text-xl mt-6 ">Loading...</div>
          </div>
        )}
         <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeHrLthxFaQsH9XtaU-6lE5QqxrTSVkztK1tjEjQztKvBCz7w/viewform?embedded=true"
          className={`mx-auto w-full md:w-2/3 lg:w-1/2 ${loading ? "hidden" : ""}`}
          height="2300"
          onLoad={handleIframeLoad}
        >   
          Loading...
        </iframe> 
          <p className="UpcommingEvents text-2xl md:text-4xl font-bold text-white text-center pt-[80px]">To be Announced...</p>

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

export default AhwanEventBoys;
