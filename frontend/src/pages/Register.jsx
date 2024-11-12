import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaImages } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CiLock, CiMail } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app, auth, db } from "../firebase/firebase.js";
import toast from "react-hot-toast";
import { setDoc, doc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { SignUp, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/login");
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
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
                  // Customizing the text
                  headerTitle: "text-xl font-bold text-gray-900",
                  // Customizing the "Continue" button to remove the arrow
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
    </>
  );
};

export default Register;
