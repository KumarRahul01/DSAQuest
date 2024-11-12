import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignUp, useUser } from "@clerk/clerk-react";
import Navbar from "../components/Navbar/Navbar";
import toast from "react-hot-toast";

const Register = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="bg min-h-screen pb-10 selection:bg-[#ffbe25db] selection:text-slate-50">
      <div className="px-4 sm:px-5 md:px-14 text-white">
        <Navbar />
      </div>

      {loading ? (
        <div className="mt-40 flex justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="mt-5 xs:mt-10 flex justify-center">
          <SignUp
            appearance={{
              elements: {
                headerTitle: "text-xl font-bold text-gray-900",
                formButtonPrimary:
                  "bg-yellow-500 hover:bg-yellow-600 transition-all duration-150 text-white text-[16px] tracking-wide py-2 rounded-md",
                formFieldInput: "py-3 text-base",
              },
            }}
            signInUrl="/login"
          />
        </div>
      )}
    </div>
  );
};

export default Register;
