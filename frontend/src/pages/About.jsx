import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <div className="bg w-full h-screen text-white selection:bg-[#ffbe25db] selection:text-slate-50">
        {/* Hero section */}
        <div className="px-4 sm:px-5 md:px-14">
          <Navbar />
        </div>

        {/* Heading */}
        <div className="heading w-full h-[68%] px-4 sm:px-5 md:px-14">
          <h1 className="lg:text-2xl md:text-xl text-lg font-bold mb-4 text-center">
            DSAQuest - Your best friend in solving top DSA Sheets
          </h1>

          <p className="mb-16 lg:text-xl md:textlg lg:w-[600px]">
            DSAQuest is a web-based DSA progress tracker based on{" "}
            <a
              href="https://bit.ly/DSAbyApnaCollege"
              className="text-[#ffbd25] font-medium"
            >
              Apna College DSA Sheet{" "}
            </a>
            by{" "}
            <a
              href="https://bit.ly/3BqeDIt"
              target="_blank"
              className="text-[#ffbd25] font-medium"
            >
              Shradha Khapra
            </a>
          </p>

          {/* Project by */}
          <p className="mb-2 lg:text-xl md:textlg lg:w-[600px]">
            Project Made By{" "}
            <a
              href="https://www.linkedin.com/in/rahul-kumar-chandra/"
              target="_blank"
              className="text-[#ffbd25] font-medium"
            >
              Rahul Kumar
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
