import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../../firebase/firebase.js";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState("");

  const getUser = () => {
    if (user === "" || user == null) {
      // console.log(false);
      setIsLoggedIn(false);
    } else {
      // console.log(true);
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    getUser();
  }, [user]);

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        user,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
