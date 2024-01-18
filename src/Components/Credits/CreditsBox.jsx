import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

const CreditsBox = (props) => {
  return (
    <div className="h-[250px] my-8 md:my-0 py-[30px] w-[230px] space-y-4 px-[20px] shadow-md shadow-[#45F0DF] backdrop-filter backdrop-blur-md bg-gradient-to-tl from-purple-900 to-black bg-opacity-40 rounded-2xl flex flex-col justify-center items-center">
      <div className="flex justify-center items-center space-x-2 ">
        <div className="contact flex flex-col items-center justify-center space-y-2">
          <a href={props.linkedIn} target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-slate-300 text-xl"
            />
          </a>
          <a href={props.insta} target="_blank">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="text-slate-300 text-xl"
            />
          </a>
          <a href={props.twitter} target="_blank">
            <FontAwesomeIcon
              icon={faSquareTwitter}
              className="text-slate-300 text-xl"
            />
          </a>
        </div>
        <div className="photo w-[80px] rounded-full">
          <img
            src={props.photo}
            alt="profile image"
            className="w-[full] h-[full] rounded-full"
          />
        </div>
      </div>
      <div className="details text-white flex flex-col space-y-2 justify-center items-center">
        <p className="name text-[#45F0DF] font-semibold text-center">
          {props.name}
        </p>
        <p className="role">( {props.role} )</p>
      </div>
    </div>
  );
};

export default CreditsBox;
