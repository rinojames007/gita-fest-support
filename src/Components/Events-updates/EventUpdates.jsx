import React from "react";
import EventList from "./EventList";
import upcomingEvents from "../../time.js";

const EventUpdates = () => {
  // console.log(upcomingEvents);
  return (
    <div className=" flex items-center mx-auto">
      <div className=" flex md:flex-row flex-col items-center py-7 px-3 md:py-[60px] md:px-[40px] md:space-x-6 mx-auto">
        <div className="left hidden md:w-[40%] md:flex items-center mx-auto">
          <div className="img-container w-full flex items-center rounded-xl shadow-md shadow-black">
            <img
              src="https://i.postimg.cc/br6N8YFQ/Robo-wars.webp"
              alt="Event-Picture"
              className="rounded-xl flex items-center "
            />
          </div>
        </div>
        <div className="right md:w-[60%] w-full px-2 flex flex-col items-center space-y-5 py-3 md:py-0 mx-auto">
          <h1 className=" text-3xl md:text-5xl font-bold text-center text-white mx-auto">
            Upcoming Events
          </h1>
          <p className="font-semibold text-sm text-slate-300 text-center">
            Check out the upcoming events lined up in the next 30 minutes and
            join the fun.
          </p>
          <div className="Event-lists w-full flex flex-col md:flex-row justify-around flex-wrap">
            {/* {upcomingEvents.map((item) => 
                            <EventList key= {item.key} name={item.name} venue={item.venue} time={item.time} />
                        )} */}
            <p className="UpcommingEvents text-4xl font-bold text-white text-center pt-[60px] UpcommingEvents">
              To be Announced...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventUpdates;
