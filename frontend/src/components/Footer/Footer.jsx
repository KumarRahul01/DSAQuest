import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaInfoCircle,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white fixed bottom-0 px-4 sm:px-5 md:px-14 py-4 flex flex-col sm:flex-row sm:justify-between justify-center items-center gap-4 sm:gap-0 w-full">
      <div>
        <h1 className="lg:text-2xl text-xl font-semibold">DSAQuest</h1>
      </div>
      <div>
        <p className="lg:text-lg text-sm">
          Made with by ❤️{" "}
          <Link to={"https://linkedin.com/in/rahul-kumar-chandra"}>
            Rahul Kumar
          </Link>{" "}
        </p>
      </div>
      <div>
        <div className="flex items-center space-x-4">
          <Link
            to="https://github.com/KumarRahul01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-2xl hover:text-[#ffbd25]" />
          </Link>
          <Link to="/about" rel="noopener noreferrer">
            <FaInfoCircle className="text-white text-2xl hover:text-[#ffbd25]" />
          </Link>
          <Link
            to="mailto:kumarrahul.chandra2002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoIosMail
              size={"1.85rem"}
              className="text-white text-2xl hover:text-[#ffbd25]"
            />
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-[#ffbd25]" />
          </Link>
          <Link
            to="https://linkedin.com/in/rahul-kumar-chandra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-2xl hover:text-[#ffbd25]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
