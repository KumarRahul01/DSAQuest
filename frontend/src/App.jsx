import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import LandingTemplate from "./pages/LandingTemplate";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import { auth } from "./firebase/firebase";
import Profile from "./components/userProfile/Profile";
import TopicQuesTemplate from "./components/QuesTemplate/TopicQuesTemplate";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

const App = () => {
  const [user, setUser] = useState([]); // Store logged-in user
  // const [user, setUser] = useState(null); // Store logged-in user solns by chatgpt
  // const [redirecting, setRedirecting] = useState(false); // Track redirection

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

    // Monitor authentication state
    // useEffect(() => {
    //   const unsubscribe = auth.onAuthStateChanged((currentUser) => {
    //     setUser(currentUser); // Set the user if logged in
    //   });
    //   return () => unsubscribe();
    // }, []);
  

  // useEffect(() => {
  //   if (user && redirecting) {
  //     // Show toast notification when redirecting due to login
  //     toast.success("You are already logged in! Redirecting to home...");
  //   }
  // }, [user, redirecting]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Apna College */}
        <Route
          path="/apna-college"
          element={
            <LandingTemplate
              title={"Apna College"}
              instructor={"Shradha Khapra"}
            />
          }
        />
        
        {/* dyanmic routing */}
        <Route path="/apna-college/:topic" element={<TopicQuesTemplate />} />

        {/* 404 landing page */}
        <Route path="*" element={<NotFoundPage />} />

        {/* Login page */}
        <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <Login />}
        />

        {/* Login route with redirection if user is logged in */}
        {/* <Route
          path="/login"
          element={
            user ? setRedirecting(true) || <Navigate to="/" /> : <Login />
          }
        /> */}

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Profile Page */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
