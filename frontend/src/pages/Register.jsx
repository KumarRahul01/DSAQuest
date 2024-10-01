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

const Register = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  // Error Handling
  const [usernameError, setUsernameError] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);

  const passwordHandler = (e) => {
    setCheckPassword(false);
    setPassword(e.target.value);
  };

  const confirmPassHandler = (e) => {
    setCheckPassword(false);
    setConfirmPassword(e.target.value);
  };

  const SignUpAuthentication = async () => {
    setLoading(true);
    try {
      // Ensure the image is uploaded before proceeding
      if (image) {
        const storage = getStorage(app);
        const storageRef = ref(storage, "images/" + image.name);
        await uploadBytes(storageRef, image); // Upload the image
        const downloadURL = await getDownloadURL(storageRef); // Get the image URL
        console.log(downloadURL);

        // Proceed with user creation only after getting the downloadURL
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user; // Get the created user

        if (user) {
          const uid = user.uid; // Get the user's unique ID
          localStorage.setItem("userId", JSON.stringify(uid));

          // Store user data in Firestore
          await setDoc(doc(db, "Users", user.uid), {
            fullname,
            email,
            photo: downloadURL, // Store the image URL in the database
            userId: uid,
          });
          setLoading(false);
          toast.success("User Registered Successfully!");
          console.log(user);
        }
      } else {
        toast.error("Please upload an image.");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Error in signing up");
    }
  };

  // Image change handler (unchanged)
  // const handleImageChange = (e) => {
  //   const userImage = e.target.files[0];
  //   if (userImage) {
  //     setImage(userImage); // Set the selected image
  //   }
  // };

  const clearEntries = () => {
    setUsername("");
    setFullname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setImage(null);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // console.log(username[0]);

    if (typeof username[0] === "number") {
      setUsernameError(true);
    } else if (password !== confirmPassword) {
      setCheckPassword(true);
    } else {
      await SignUpAuthentication();
    }

    clearEntries();
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
          toast.success("User Registered Successfully!");
        }, 100);
      }
    });
  };

  return (
    <>
      <div className="bg min-h-screen pb-10 selection:bg-[#ffbe25db] selection:text-slate-50">
        <div className="px-4 sm:px-5 md:px-14 text-white">
          <Navbar />
        </div>

        {loading ? (
          <div className="min-h-screen flex justify-center items-center">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="w-full mt-0 flex items-center justify-center">
            <div className="bg-[#111111] xxs:w-[310px] xs:w-[600px] overflow-hidden text-white p-8 lg:p-12 text-center">
              <div className="flex flex-col justify-center items-center">
                <h2 className="lg:text-3xl text-xl">Master DSA with</h2>
                <h1 className="text-[#ffbd25] text-2xl lg:text-3xl my-1 font-bold">
                  DSAQuest
                </h1>
              </div>

              {/* google login */}
              <div className="my-5 flex justify-center">
                <button
                  className="border-2 flex pr-2 items-center gap-2 rounded-sm hover:ring-1 hover:border-[#ffbd25] hover:scale-[1.03] ring-[#ffbd25] transition-all duration-150 cursor-pointer"
                  onClick={googleLogin}
                >
                  <div className="bg-[#fff] w-8 h-8 flex items-center justify-center">
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
                  <span className="">Sign up with Google</span>
                </button>
              </div>

              {/* divider */}
              <div className="flex items-center mb-4 justify-center sm:hidden">
                <div className="underline w-1/3 bg-[#333] h-[2px]"></div>
                <div className="w-1/3">OR</div>
                <div className="underline w-1/3 bg-[#333] h-[2px]"></div>
              </div>

              <div className="w-full mt-2 mb-6 hidden sm:block">
                <div className="flex items-center justify-center">
                  <div className="underline w-full bg-[#333] h-[2px]"></div>
                  <div className="w-full">Or, sign up with</div>
                  <div className="underline w-full bg-[#333] h-[2px]"></div>
                </div>
              </div>

              {/* login form */}
              <div>
                <form onSubmit={submitHandler}>
                  {/* UserName */}
                  <div className="border rounded-sm flex gap-2 mb-0 p-2">
                    <CgProfile className="text-zinc-400" size={"1.5rem"} />
                    <input
                      className="bg-transparent text-[#eee]"
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  {usernameError && (
                    <div className="text-left text-xs text-red-400 mt-[2px]">
                      <h1>This username is not available</h1>
                    </div>
                  )}

                  {/* Name */}
                  <div className="border rounded-sm flex gap-2 mt-6 p-2">
                    <CiUser size={"1.5rem"} />
                    <input
                      className="bg-transparent text-[#eee]"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="border rounded-sm flex gap-2 mt-6 p-2">
                    <CiMail size={"1.5rem"} />
                    <input
                      className="bg-transparent text-[#eee]"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="john@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="flex flex-col mb-6">
                    <div className="w-full flex gap-5 mt-6">
                      {/* Password */}
                      <div className="w-full border rounded-sm flex items-center gap-1 p-2">
                        <CiLock size={"1.5rem"} />
                        <div className="flex items-center relative">
                          <input
                            className="bg-transparent text-[#eee]"
                            type={!show ? "password" : "text"}
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => passwordHandler(e)}
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

                      {/* Confirm Pasword */}
                      <div className="w-full border rounded-sm flex items-center gap-1 p-2">
                        <CiLock size={"1.5rem"} />
                        <div className="flex items-center relative">
                          <input
                            className="bg-transparent text-[#eee]"
                            type={!show ? "password" : "text"}
                            name="confirm-password"
                            id="confirm-password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => confirmPassHandler(e)}
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
                    </div>
                    {checkPassword && (
                      <div className="text-left text-xs text-red-400 mt-[2px]">
                        <h1>Both passwords are not same</h1>
                      </div>
                    )}
                  </div>

                  {/* Image */}
                  {/* <div className="border rounded-sm flex gap-2 mb-6 p-2 cursor-pointer">
                    <FaImages className="text-zinc-400" size={"1.5rem"} />
                    <input
                      className="bg-transparent text-[#eee] cursor-pointer"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      ref={fileInputRef}
                      required
                    />
                  </div> */}

                  {/* Submit */}
                  <div className="bg-[#ffbd25] h-10 flex justify-center mb-4 rounded-sm cursor-pointer font-medium tracking-wide">
                    <button>Sign up</button>
                  </div>

                  {/* Login form */}
                  <div className="xxs:text-sm xs:text-base">
                    <p>
                      Already have an account?{" "}
                      <Link
                        to={"/login"}
                        className="text-[#ffbd25] hover:underline underline-offset-2"
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Register;
