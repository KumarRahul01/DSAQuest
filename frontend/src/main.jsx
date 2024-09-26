import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LoginContextProvider from "./components/contexts/LoginContext.jsx";
import AnswerCountProvider from "./components/contexts/AnswerCount.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoginContextProvider>
      <AnswerCountProvider>
        <Toaster position="top-right" reverseOrder={false} />
        <App />
      </AnswerCountProvider>
    </LoginContextProvider>
  </BrowserRouter>
);
