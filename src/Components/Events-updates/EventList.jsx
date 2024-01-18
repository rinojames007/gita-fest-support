import React from "react";
const EventList = (props) => {
  return (
    <div>
      <div className="UpcommingEvents flex w-full flex-col bg-white text-black justify-center items-center border-2 my-3 rounded-lg md:p-6 p-3 hover:cursor-pointer mx-auto">
        <div className="event-Info  flex flex-col justify-center items-center">
          <p className="font-bold text-3xl text-center ">{props.name}</p>
          <p className="font-semibold text-md text-slate-600 text-center ">{props.venue}</p>
        </div>

        <div className="event-timming mt-4 flex justify-between items-center ">
          <p className="font-semibold w-[50%] text-sm text-start">
            Fri, 4 Feb 2024
          </p>
          <p className="text-md text-red-600 w-[50%] text-end font-semibold">{props.time}</p>
        </div>
      </div>
    </div>
  );
};

export default EventList;
