import React from "react";

const EventCard = (props) => {
  return (
    <div className="w-full h-full rounded-xl mb-11 md:mb-8 ">
      <div
        style={{ backgroundImage: `url(${props.url})` }}
        className="events z-0 w-full h-[170px] sm:h-[250px] bg-cover bg-center bg-no-repeat px-3 rounded-xl opacity-80 sm:hover:scale-105 focus:scale-100  sm:hover:opacity-40 active:scale-95  font-bold text-4xl  hover:text-5xl flex flex-col justify-center items-center hover:delay-200 shadow-lg shadow-blue-400 "
      >
        <p className="text-center opacity-100 text-white ">
          {props.name}
        </p>
        <span className="text-xs font-semibold text-white underline mt-4">{props.desc}</span>
      </div>
      
    </div>
  );
};

export default EventCard;
