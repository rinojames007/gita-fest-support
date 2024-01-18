
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const RoboticsDetails = () => {
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
    <div className="bg-gradient-to-b from-black via-purple-900 to-black h-full min-h-screen">
      <Navbar />
      <div className=" pt-[60px] h-full">
        <div className=" flex flex-col md:flex-row">
          <div className="left md:w-[50%] md:p-6 p-2">
            <img
              src="https://i.postimg.cc/y6rQB070/robotics.jpg"
              alt="event-image"
              className=" rounded-xl shadow-md shadow-blue-700"
            />
          </div>
          {/* <div className="right md:w-[50%] md:p-6 p-2">
            <div className="right-container flex flex-col justify-center items-center space-y-4">
              <h1 className="text-white text-2xl md:text-4xl font-semibold">
                Robotics
              </h1>
              <p className="desc text-slate-300 text-sm text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam eos incidunt ullam cumque perferendis sapiente.
              </p>
              <div className="rules px-2 ">
                <p className=" text-white mx-auto font-semibold text-2xl">
                  Rules
                </p>
                <ul className="text-slate-300 mx-auto text-sm md:text-lg list-disc">
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                </ul>
              </div>
              <div className="prizes-timmings space-x-3 items-center justify-center flex flex-wrap text-white">
                <p className="text-xl ">
                  Prize:{" "}
                  <span className="text-slate-300 text-sm ml-1">5000</span>
                </p>
                <p className="text-xl  ">
                  Venue:{" "}
                  <span className="text-slate-300 text-sm ml-1">
                    Lab 10 (Main Building)
                  </span>
                </p>
              </div>
              <div className="timmings flex space-x-3 justify-around flex-wrap">
                <p className="text-white">
                  Date:
                  <span className="text-slate-300 text-sm">4/02/2024</span>
                </p>
                <p className="text-white">
                  Time: <span className="text-slate-300 text-sm">9:30 AM</span>
                </p>
              </div>
              <div className="event-Incharge flex  flex-wrap justify-around space-x-4">
                <div className="container-Teachers pt-3">
                  <h1 className="text-white font-semibold md:text-lg">
                    Event Incharge
                  </h1>
                  <div className=" flex flex-col  text-white text-sm">
                    <p>Rohan Das</p>
                    <p>Rohan Das</p>
                    <p>Rohan Das</p>
                  </div>
                </div>
                <div className="container-Coordinator pt-3">
                  <h1 className="text-white font-semibold text-lg">
                    Event Coordinator
                  </h1>
                  <div className=" flex flex-col  text-white text-sm">
                    <p>Rohan Das</p>
                    <p>Rohan Das</p>
                    <p>Rohan Das</p>
                  </div>
                </div>
                <div className="container-Coordinator pt-3">
                  <h1 className="text-white font-semibold text-lg">
                    Event Volunteer
                  </h1>
                  <div className=" flex flex-col  text-white text-sm">
                    <p>Rohan Das</p>
                    <p>Rohan Das</p>
                    <p>Rohan Das</p>
                  </div>
                </div>
              </div>
              <Link
                to="/anwesh/registration/Robotics"
                class="flex items-center w-[200px] justify-center py-3 my-2 md:my-5 text-lg font-medium text-center text-white hover:scale-90 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register
              </Link>
            </div>
          </div> */}
          <p className="UpcommingEvents text-2xl md:text-4xl font-bold text-white text-center mx-auto pt-[80px]">To be Announced...</p>

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

export default RoboticsDetails;
