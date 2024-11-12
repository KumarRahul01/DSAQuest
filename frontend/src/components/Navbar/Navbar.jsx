import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { FaGithub, FaUserCircle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { doSignOut } from "../../firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const [mobNav, setMobNav] = useState(false);

  const clickHanlder = (name) => {
    navigate(`/${name}`);
  };

  return (
    <nav className="flex justify-between items-center py-5 relative">
      {/* Logo */}
      <Link
        to={"/"}
        className="logo w-fit bg-indgo-500 lg:w-[30%]  text-3xl font-semibold"
      >
        DSAQuest.
      </Link>

      {/* Mobile Navbar */}
      <div className="mob-links md:hidden block">
        <button onClick={() => setMobNav(!mobNav)}>
          <CiMenuFries className="text-white" size={"1.25rem"} />
        </button>

        {mobNav && (
          <div className="absolute w-full left-0 top-16 bg-zinc-700 p-4 flex flex-col xs:grid grid-cols-2 z-10">
            <button
              className="px-6 py-1 border-4 hover:border-[#ffbd25] text-slate-50 m-2 rounded-md font-medium tracking-wide transition-all duration-150 block"
              onClick={() => clickHanlder("apna-college")}
            >
              Alpha
            </button>

            <button
              className="px-6 py-1 border-4 hover:border-[#ffbd25] text-slate-50 m-2 rounded-md font-medium tracking-wide transition-all duration-150 block"
              onClick={() => clickHanlder("profile")}
            >
              Profile
            </button>
            {/* <button
              className="px-6 py-1 border-4 hover:border-[#ffbd25] text-slate-50 m-2 rounded-md font-medium tracking-wide transition-all duration-150 block"
              onClick={() => clickHanlder("love-babbar")}
            >
              Love Babbar
            </button>
            <button
              className="px-6 py-1 border-4 hover:border-[#ffbd25] text-slate-50 m-2 rounded-md font-medium tracking-wide transition-all duration-150 block"
              onClick={() => clickHanlder("striver")}
            >
              Striver
            </button> */}
            {/* <button
              className="px-6 py-1 border-4 hover:border-[#ffbd25] text-zinc-950 m-2 rounded-md font-medium tracking-wide transition-all duration-150 block"
              onClick={() => clickHanlder("leetcode")}
            >
              Leetcode
            </button> */}
            <div className="hidden lg:flex justify-evenly items-center w-full">
              <Link to={"/github"} title="Github">
                <FaGithub size={"1.4rem"} />
              </Link>
              <Link to={"/github"} title="LinkedIn">
                <FaLinkedin size={"1.4rem"} />
              </Link>
              <Link to={"/profile"} className="m-2" title="Profile">
                <FaUserCircle size={"1.4rem"} />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Main Navbar */}
      <div className="w-fit lg:w-[60%] hidden md:flex justify-center gap-2 items-center main-nav1">
        <Link to={"/apna-college"}>Apna College</Link>
        {/* <Link to={"/love-babbar"}>Love Babbar</Link>
        <Link to={"/striver"}>Striver</Link> */}
        {/* <Link to={"/leetcode"}>Leetcode</Link> */}
      </div>

      <div className="w-1/3 lg:w-[30%] hidden lg:flex items-center justify-end main-nav2 tracking-wide">
        {/*<Link to={"/about"}>About</Link> */}
        {/*<Link to={"/connect"}>Contact</Link> */}
        {/* <Link to={"https://github.com/KumarRahul01"} title="Github">
          <FaGithub size={"1.4rem"} />
        </Link> */}
        {/* <Link to={"https://linkedin.com/in/rahul-kumar-chandra"} title="LinkedIn">
          <FaLinkedin size={"1.4rem"} />
        </Link> */}
        <Link to={"/profile"} className="ml-2" title="Profile">
          <FaUserCircle size={"1.4rem"} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
