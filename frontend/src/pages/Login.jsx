import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg min-h-screen overflow-hidden">
          <div className="px-4 sm:px-5 md:px-14 text-white">
            <Navbar />
          </div>
          <div className="h-96 flex justify-center items-center">
            <span className="loader"></span>
          </div>
        </div>
      ) : (
        <div className="bg min-h-screen lg:pb-5 overflow-hidden selection:bg-[#ffbe25db] selection:text-slate-50">
          <div className="px-4 sm:px-5 md:px-14 text-white">
            <Navbar />
          </div>
          <div className="mt-5 xs:mt-10 lg:mt-16 flex justify-center">
            <SignIn
              appearance={{
                elements: {
                  // Customizing the text
                  headerTitle: "text-xl font-bold text-gray-900",
                  // Customizing the "Continue" button to remove the arrow
                  formButtonPrimary:
                    "bg-yellow-500 hover:bg-yellow-600 transition-all duration-150 text-white text-[16px] tracking-wide py-2 rounded-md", // Your own custom styles
                  formFieldInput: "py-3 text-base",
                },
              }}
              signUpUrl="/register"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
