import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center h-fit w-full">
        <div className="about  justify-center items-center">
          <a
            href="https://gita.edu.in/"
            target="_blank"
            className="flex space-x-2 text-white hover:text-red-500 "
          >
            <img src="Gita-logo.png" alt="Logo Gita" className="w-[20px]" />
            <p className=" text-xs underline underline-offset-2 ">
              GITA Autonomous College, Bhubaneswar
            </p>
          </a>
        </div>
        <ul className="flex flex-col md:flex-row justify-center items-center py-[30px] md:h-[100px] h-fit w-full space-y-4 md:space-y-0  md:space-x-5">
          <Link to="/feedback">
            <li className="font-semibold underline text-sm sm:text-2xl text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer">
              Your Feedback
            </li>
          </Link>
          <Link to="/fest/CreditsPage">
            <li className="font-semibold underline text-sm sm:text-2xl text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer">
              Credits
            </li>
          </Link>
          <Link to="/coordinators">
            <li className="font-semibold underline text-sm sm:text-2xl text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer">
              Event Coordinators
            </li>
          </Link>
          <Link to="/help">
            <li className="font-semibold underline text-sm sm:text-2xl text-slate-300 hover:underline hover:text-slate-500 hover:cursor-pointer">
              Help and Support Team
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
