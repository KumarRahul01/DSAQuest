import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import { LoginContext } from "../contexts/LoginContext";
import { AnswerCount } from "../contexts/AnswerCount";
import Navbar from "../Navbar/Navbar";

const Profile = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(LoginContext);
  const { answerCount } = useContext(AnswerCount);
  console.log(isLoggedIn);

  const [userDetails, setUserDetails] = useState(null);

  const fetchData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log(docSnap.data());
        setUserDetails(docSnap.data());
      } else {
        console.log("User not logged In!");
      }
    });
  };

  const logout = async () => {
    try {
      await auth.signOut();
      navigate("/");
      toast.success("Logged out successfully!");
    } catch (error) {
      console.log("Logout Error: ", error);
    }
  };

  const redirectHome = () => {
    navigate("/login");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg w-full min-h-screen text-white selection:bg-[#ffbe25db] selection:text-slate-50">
      <div className="px-4 sm:px-5 md:px-14 text-white">
        <Navbar />
      </div>
      {userDetails ? (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="lg:w-[420px] xxs:w-[300px] xs:w-[340px] bg-zinc-700 rounded-md flex justify-center flex-col items-center p-6 lg:px-6 my-20">
            <div className="overflow-hidden">
              <img
                className="w-20 h-20 rounded-full"
                src={avatar || userDetails.photo}
                alt="profile-pic"
              />
            </div>
            <h1 className="lg:text-2xl text-xl font-medium lg:my-4 my-3">
              Welcome
            </h1>
            <div className="w-full">
              <h2 className="my-3 lg:mb-4 xxs:text-sm xs:text-base">
                <span className="font-semibold text-[#ffbd25] mr-2">
                  Full Name:
                </span>{" "}
                {userDetails.fullname || userDetails.displayName}
              </h2>
              <h2 className="my-3 lg:my-4 xxs:text-sm xs:text-base">
                <span className="font-semibold text-[#ffbd25] mr-2">
                  Email:
                </span>{" "}
                {userDetails.email}
              </h2>
              <h2 className="my-3 lg:my-4 xxs:text-sm xs:text-base">
                <span className="font-semibold text-[#ffbd25] mr-2">
                  Total Question Solved:
                </span>{" "}
                {answerCount}
              </h2>
            </div>
            <button
              className="w-full bg-[#ffbd25] p-1 font-semibold text-lg rounded-md my-3 lg:my-4"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div
          onLoad={() => toast.error("Please login first!")}
          className="w-full"
        >
          {!isLoggedIn && (
            <>
              <div className="h-96 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-[#ffbd25] text-center p-4">
                  Opps!!{" "}
                  <span className="text-2xl font-medium text-white">
                    Please Login First ...
                  </span>
                </h1>
                <span className="loader"></span>
                <button
                  className="mt-5 border-[3px] px-10 py-2 rounded-md text-lg font-semibold hover:text-zinc-950 hover:bg-[#eee] transition-all duration-150"
                  onClick={redirectHome}
                >
                  Login Now
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
