import React from "react";

const WinnerDisplay = (props) => {
  return (
    <div className="h-full mx-auto">
      <h1 className="text-3xl font-bold text-center text-white">Winners:</h1>
      <div className="positions flex flex-col w-full space-y-6 items-center justify-center py-5">
        <div className="first-position  flex justify-center items-center space-x-3 bg-gray-900 py-2 px-4 rounded-xl ">
          <h1 className="font-bold text-2xl text-white">
            1 <sup>st</sup> :
          </h1>
          <p className=" text-sm md:text-xl font-semibold text-slate-200">
            {props.first}
          </p>
          
        </div>
        
        <div className="Second-position  flex justify-center items-center space-x-3 bg-gray-900 py-2 px-4 rounded-xl ">
          <h1 className="font-bold text-2xl text-white">
            2 <sup>nd</sup> :
          </h1>
          <p className=" text-sm md:text-xl font-semibold text-slate-200">
            {props.second}
          </p>
          
        </div>
        
        <div className="Third-position  flex justify-center items-center space-x-3 bg-gray-900 py-2 px-4 rounded-xl ">
          <h1 className="font-bold text-2xl text-white">
            3 <sup>rd</sup> :
          </h1>
          <p className=" text-sm md:text-xl font-semibold text-slate-200">
            {props.third}
          </p>
          
        </div>
        
      </div>
    </div>
  );
};

export default WinnerDisplay;
