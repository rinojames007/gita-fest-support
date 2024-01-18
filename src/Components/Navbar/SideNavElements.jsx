import React from "react";
import { Link } from "react-router-dom";

const SideNavElements = (props) => {
  return (
    <div>
      <ul className="flex text-white flex-col w-full">
        <li>
          <Link
            to={props.link}
            className="flex justify-start items-center mt-5 px-2"
          >
            <span className="sm:text-3xl text-2xl hover:scale-90  px-2">
              {props.icon}
            </span>
            <span className="hidden sm:flex hover:scale-90 text-lg font-bold">
              {props.title}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavElements;
