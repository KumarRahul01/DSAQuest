import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import LandingTemplate from "./pages/LandingTemplate";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import { auth } from "./firebase/firebase";
import Profile from "./components/userProfile/Profile";
import TopicQuesTemplate from "./components/QuesTemplate/TopicQuesTemplate";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/apna-college"
          element={
            <LandingTemplate
              title={"Apna College"}
              instructor={"Shradha Khapra"}
            />
          }
        />
        <Route path="/apna-college/:topic" element={<TopicQuesTemplate />} />

        {/* Login page */}
        <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <Login />}
        />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Profile Page */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
