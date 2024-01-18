import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Feedback = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Add an event listener to check scroll position
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300); // Change 200 to adjust when the button appears
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
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen h-full">
      <div className="absolute top-4 left-4">
        <Link to="/" className="w-fit">
          <button className="bg-slate-600 px-5 py-2 text-lg font-semibold rounded-md hover:scale-90 hover:text-red-600 text-white">
            Back
          </button>
        </Link>
      </div>
      <div className="flex pt-[80px] justify-around flex-col items-center">
        <h1 className="text-white text-center font-bold mb-10 text-4xl">
          Your Valuable Feedback
        </h1>
        {loading && (
            <div className="flex flex-col justify-center items-center h-[220px]">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
              <div className="loader text-center text-white font-semibold text-xl mt-6 ">
                Loading...
              </div>
            </div>
          )}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeV-tjAXUXJfSBhLgaUgdUjqOvg-U-7jHrdk-M6Vny1CvaDgQ/viewform?embedded=true"
          className="mx-auto w-full md:w-2/3 lg:w-1/2"
          onLoad={handleIframeLoad}
          height="1800"
        >
          Loading…
        </iframe>
      </div>

      {showBackToTop && (
        <button
          className="fixed bottom-9 md:bottom-[80px] md:text-xl font-semibold right-10 md:right-[160px] bg-blue-500 text-white px-4 md:w-[250px] md:py-4 py-2 rounded"
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      )}
    </div>
  );
};

export default Feedback;
