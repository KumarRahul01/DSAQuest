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
import About from "./pages/About";
import { useUser } from "@clerk/clerk-react";
import PrivateComp from "./components/Private/PrivateComp";

const App = () => {
  const { user, isSignedIn } = useUser();

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
        <Route path="/login/*" element={<Login />} />

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

        {/* About Page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
