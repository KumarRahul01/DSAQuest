import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail, MdOutlineMailOutline } from "react-icons/md";
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
        <div className="flex space-x-4">
          <Link
            to="https://github.com/KumarRahul01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="text-white text-2xl
                            hover:text-gray-300"
            />
          </Link>
          <Link
            to="mailto:kumarrahul.chandra2002@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineMailOutline
              size={"1.65rem"}
              className="text-white text-2xl
                            hover:text-gray-300"
            />
          </Link>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram
              className="text-white text-2xl
                            hover:text-gray-300"
            />
          </Link>
          <Link
            to="https://linkedin.com/in/rahul-kumar-chandra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-white text-2xl
                            hover:text-gray-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
