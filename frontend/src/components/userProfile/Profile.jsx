import { SignedOut, useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useUser();

  // useEffect(() => {
  //   if (user) {
  //     // Save the user ID to localStorage when the user signs up
  //     const userId = user.id;
  //     localStorage.setItem("userId", userId);
  //     // console.log("User ID saved to localStorage:", userId);
  //   }
  // }, [user]);

  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    try {
      if (user) {
        setLoading(false);
        console.log(user);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await Clerk.signOut(); // Clerk signOut method
      toast.success("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <div className="bg min-h-screen selection:bg-[#ffbe25db] selection:text-slate-50">
        <div className="px-4 sm:px-5 md:px-14 text-white">
          <Navbar />
        </div>

        {loading ? (
          <div className="mt-40 flex justify-center items-center">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="flex items-center mt-20 lg:mt-28 w-full justify-center">
            <div className="xxs:w-[280px] xs:w-80">
              <div className="bg-white shadow-xl rounded-lg py-3">
                <div className="photo-wrapper p-2">
                  <img
                    className="w-32 h-32 rounded-full mx-auto"
                    src={user?.imageUrl}
                    alt="user image"
                  />
                </div>
                <div className="sm:p-2">
                  <h3 className="text-center text-xl font-medium leading-8">
                    {user.fullName || "Guest12ef24"}
                  </h3>

                  <h3 className="text-center font-medium leading-8 text-sm text-zinc-700">
                    {user?.primaryEmailAddress?.emailAddress || "Guest12ef24"}
                  </h3>

                  <div className="text-center w-6/12 mx-auto m-2 bg-[#ffbd25] text-slate-50 px-3 py-1 rounded-md hover:bg-[#ffbe25db] hover:scale-105 font-medium">
                    <button onClick={handleSignOut}>Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
