import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";

function Card({ imagen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.05)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 30%)"
      : "0 2px 10px rgb(0 0 0 / 10%)"
  });
  return (
    <animated.div
      className="flex justify-center items-center flex-col bg-[#ffe4c4] w-[100%] px-[1em] sm:px-[3em] h-fit pb-6 rounded-lg hover:cursor-default "
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" className="-mt-[20px] rounded-lg w-[100%]" />
      <h2 className="mt-[1rem] font-bold text-xl my-2">{"Event 1"}</h2>
      <p className="text-sm text-slate-700">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy.
      </p>
      <div className="flex justify-between items-center mt-3 px-[2.5em] sm:px-[4rem]">
        <Button text="details" />
        {/* <Button text="Code" /> */}
      </div>
    </animated.div>
  );
}

export default Card;
