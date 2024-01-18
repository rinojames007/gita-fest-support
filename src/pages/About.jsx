import Navbar from "../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";

const About = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
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
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen">
        <Navbar/>
        <div className="pt-[60px]">
        <h1 className='font-bold  text-5xl text-center py-5 text-white'>About Page</h1>

        <p className="text-4xl mt-[100px] font-semibold text-center text-white">
              Comming Soon...
            </p>
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
  )
}

export default About