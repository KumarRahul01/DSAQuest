import React, { useContext, useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { auth, db } from "../firebase/firebase.js";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import Navbar from "../components/Navbar/Navbar";

const Login = () => {

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setShowError(false);
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged In Successfully!");
      toast.success("Logged In Successfully!");
      navigate(-1);
    } catch (error) {
      toast.error("Invalid Credentials!");
      setShowError(true);
      console.log(error.message);
    }
    setLoading(false);
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (res) => {
      localStorage.setItem("userId", JSON.stringify(res.user.uid));
      if (res.user) {
        await setDoc(doc(db, "Users", res.user.uid), {
          fullname: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
          userId: res.user.uid,
        });

        setTimeout(() => {
          navigate(-1);
          toast.success("Logged In Successfully!");
        }, 100);
      }
    });
  };

  return (
    <>
      {loading ? (
        <div className="bg min-h-screen overflow-hidden">
          <div className="px-4 sm:px-5 md:px-14 text-white">
            <Navbar />
          </div>
          <div className="min-h-screen flex justify-center items-center">
            <span className="loader"></span>
          </div>
        </div>
      ) : (
        <div className="bg min-h-screen lg:pb-5 overflow-hidden selection:bg-[#ffbe25db] selection:text-slate-50">
          <div className="px-4 sm:px-5 md:px-14 text-white">
            <Navbar />
          </div>
          <div className="w-full mt-8 flex items-center justify-center">
            {/* login form */}
            <div className="bg-[#111111] xxs:w-[300px] xs:w-[500px] overflow-hidden text-slate-50 p-8 lg:p-16 text-center">
              <div className="flex flex-col justify-center items-center">
                <h2 className="lg:text-2xl text-xl">Welcome back to</h2>
                <h1 className="text-[#ffbd25] text-2xl lg:text-3xl my-1 font-bold">
                  DSAQuest
                </h1>
              </div>

              {/* google login */}
              <div className="my-5 flex justify-center">
                <button
                  className="border-2 flex pr-2 items-center gap-2 rounded-sm hover:ring-1 hover:border-[#ffbd25] hover:scale-[1.03] ring-[#ffbd25] transition-all duration-150  cursor-pointer"
                  onClick={googleLogin}
                >
                  <div className="bg-slate-50 w-8 h-8 flex items-center justify-center">
                    <svg
                      version="1.1"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                    >
                      <g>
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        ></path>
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        ></path>
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        ></path>
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        ></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="">Sign in with Google</span>
                </button>
              </div>

              {/* divider */}
              <div className="flex items-center justify-center sm:hidden">
                <div className="underline w-1/3 bg-[#333] h-[2px]"></div>
                <div className="w-1/3">OR</div>
                <div className="underline w-1/3 bg-[#333] h-[2px]"></div>
              </div>

              <div className="lg:w-96 w-full lg:my-8 hidden sm:block">
                <div className="flex items-center justify-center">
                  <div className="underline w-1/3 bg-[#333] h-[2px]"></div>
                  <div className="w-full">Or, Login with your email</div>
                  <div className="underline w-1/3 bg-[#333] h-[2px]"></div>
                </div>
              </div>

              {/* login form */}
              <div>
                <form onSubmit={submitHandler}>
                  <div className="border rounded-sm flex gap-2 my-8 p-2">
                    <CiMail size={"1.5rem"} />
                    <input
                      className="bg-transparent text-[#eee]"
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => changeHandler(e)}
                      placeholder="john@gmail.com"
                      required
                    />
                  </div>

                  <div className="border rounded-sm flex items-center gap-2 mt-8 p-2">
                    <CiLock size={"1.5rem"} />
                    <div className="w-full flex items-center relative">
                      <input
                        className="bg-transparent text-[#eee]"
                        type={!show ? "password" : "text"}
                        name="password"
                        id="password"
                        placeholder="******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div
                        className="absolute right-2 cursor-pointer"
                        onClick={() => setShow(!show)}
                      >
                        {!show ? (
                          <FaEye size={"1.35rem"} />
                        ) : (
                          <FaEyeSlash size={"1.35rem"} />
                        )}
                      </div>
                    </div>
                  </div>

                  {showError && (
                    <div className="text-left text-xs text-red-400 mt-1">
                      <h1>Incorrect Username or Password</h1>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="bg-[#ffbd25] h-10 flex justify-center my-6 lg:my-8 rounded-sm font-medium tracking-wide">
                    <button>Login</button>
                  </div>

                  {/* Login form */}
                  <div className="">
                    <p>
                      Don't have an account?{" "}
                      <Link
                        to={"/register"}
                        className="text-[#ffbd25] hover:underline underline-offset-2"
                      >
                        Create accouont
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
