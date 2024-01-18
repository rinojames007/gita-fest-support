import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";

const Akanksha = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const handleIframeLoad = () => {
    // Set loading to false when the iframe has finished loading
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black h-full min-h-screen">
      <Navbar />
      <div className=" pt-20 md:pt-[200px]">
        <div className="flex flex-col md:flex-row space-y-[100px] md:space-y-0 justify-around mt-8 items-center">
          <a
            href="https://docs.google.com/spreadsheets/d/1zV5YAJgTMD_gTyNiG6tWVQFEo0a_pemZW4bDpxm-aB4/edit?usp=sharing"
            target="_blank"
            className="flex items-center justify-center px-5 w-[70%] md:w-[40%] h-[100px] py-3 text-2xl font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sheets
          </a>
          <a
            href="https://docs.google.com/forms/d/1rYMTXsXBMp56F6Hpy5Lp6x-JaWK604i9YnfqyevujZM/edit"
            target="_blank"
            className="flex items-center justify-center px-5 w-[70%] md:w-[40%] h-[100px] py-3 text-2xl font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

          >
            Form
          </a>
        </div>
      </div>
    </div>
  );
};

export default Akanksha;
