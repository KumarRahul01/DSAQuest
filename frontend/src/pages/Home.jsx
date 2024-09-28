import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg w-full h-screen text-white selection:bg-[#ffbe25db] selection:text-slate-50">
        {/* Hero section */}
        <div className="px-4 sm:px-5 md:px-14">
          <Navbar />
        </div>

        {/* Heading */}
        <div className="heading w-full h-[68%] px-4 sm:px-5 md:px-14">
          <h4 className="text-lg xs:text-2xl font-semibold m-6">
            Welcome To DSAQuest!
          </h4>
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold mb-1 text-center">
            Master DSA & Crack <br /> Your Dream Company
          </h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Google",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "Amazon",
              2000,
              "Meta",
              2000,
            ]}
            wrapper="div"
            className="auto-type-text"
            speed={2}
            deletionSpeed={2}
            repeat={Infinity}
          />
          <button
            className="mt-5 border-[3px] px-10 py-2 rounded-md text-lg font-semibold hover:text-zinc-950 hover:bg-[#eee] transition-all duration-150"
            onClick={() => navigate("/apna-college")}
          >
            Start Now
          </button>
        </div>

        {/* <div className="w-full h-fit">
        <button className="px-6 py-1 bg-blue-500 hover:bg-blue-700 mx-4 rounded-md text-white font-medium tracking-wide transition-all duration-150" onClick={() => clickHanlder("alpha")}>Alpha</button>
        <button className="px-6 py-1 bg-blue-500 hover:bg-blue-700 mx-4 rounded-md text-white font-medium tracking-wide transition-all duration-150" onClick={() => clickHanlder("love-babbar")}>Love Babbar</button>
        <button className="px-6 py-1 bg-blue-500 hover:bg-blue-700 mx-4 rounded-md text-white font-medium tracking-wide transition-all duration-150" onClick={() => clickHanlder("striver")}>Striver</button>
        <button className="px-6 py-1 bg-blue-500 hover:bg-blue-700 mx-4 rounded-md text-white font-medium tracking-wide transition-all duration-150" onClick={() => clickHanlder("leetcode")}>Leetcode</button>
      </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
