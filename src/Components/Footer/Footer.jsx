import React from "react";


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
        
      </div>
    </div>
  );
};

export default Footer;
