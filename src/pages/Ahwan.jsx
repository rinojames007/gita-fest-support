import React, { useEffect, useState } from "react";
// import EventBox from "../Components/Event-box/EventBox";
import Navbar from "../Components/Navbar/Navbar";
import EventDetailsAhwan from "../AhwanEventDetails";
import EventBox from "../Components/Events-updates/EventBox";

const Ahwan = () => {
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
    <div className=" min-h-screen w-full bg-gradient-to-b from-black via-purple-900 to-black">
        <Navbar/>
      {/* Tech Fest */}
      <div className=" pt-[60px]  h-full flex flex-col justify-center items-center">
      
        <h1 className="text-5xl font-bold my-4 text-white">Ahwan</h1>
        <p className="text-sm mb-8 text-center px-2 text-slate-200">
          Welcome to the gateway of Our Sports Registration Page Get ready to
          dive into a world of physical prowess and sportsmanship!
        </p>
        <div className="Event-Container w-full flex justify-around flex-wrap">
        {EventDetailsAhwan.map((item)=>(
          <EventBox key= {item.key} url= {item.url} name={item.name} desc= {item.desc} date= {item.date} time={item.time} form={item.form} sheets={item.sheets} venue={item.venue}/>
        ))}
          
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

export default Ahwan;
