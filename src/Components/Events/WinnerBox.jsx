import React from "react";

const WinnerBox = (props) => {
  return (
    <div className="px-2 border-b-2 py-4 border-purple-500">
      <div className="postion-1 flex text-white justify-between space-x-5 items-center ">
        <div>
          <h1 className="font-bold text-xl">{props.position}</h1>
        </div>
        <div className="name text-white">
          <p>{props.name}</p>
          <p className="text-sm text-slate-300">({props.RollNum})</p>
        </div>
        <div className="prize">
          <p>Prize:</p>
          <p className="text-xs text-slate-300">₹ {props.prize}</p>
        </div>
      </div>
    </div>
  );
};

export default WinnerBox;
