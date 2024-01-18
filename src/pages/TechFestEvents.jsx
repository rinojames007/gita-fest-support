import React, { useEffect, useState } from "react";
import EventBox from '../Components/Events-updates/EventBox'
import Navbar from "../Components/Navbar/Navbar";
import EventDetails from '../AnweshEventDetails';
const TechFestEvents = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1000);
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
    <div className=" min-h-screen h-full w-full bg-gradient-to-b from-black via-purple-900 to-black">
      <Navbar />
      {/* Tech Fest */}
      <div className=" py-[60px] flex flex-col justify-center items-center w-full">
        <h1 className="text-3xl md:text-5xl font-bold my-4 text-center text-white">Tech Fest Events</h1>
        
        <div className="Event-Container w-full flex justify-around flex-wrap">
        {EventDetails.map((item)=>(
          <EventBox key= {item.key} url= {item.url} name={item.name} desc= {item.desc} date= {item.date} time={item.time} form={item.form} sheets={item.sheets} venue={item.venue}/>
        ))}
          {/* <p className="UpcommingEvents text-2xl md:text-4xl font-bold text-white text-center pt-[80px]">To be Announced...</p> */}
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
  )
}

export default TechFestEvents