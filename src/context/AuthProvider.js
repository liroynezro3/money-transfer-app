import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { checkValidUser } from "../services/authService";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  console.log(user);

  const loginHandler = (responeUserDetails) => {
    console.log(responeUserDetails);
    setUser(responeUserDetails);
    setIsLoggedIn(true);
    setToken(responeUserDetails.token);
    localStorage.setItem("token", responeUserDetails.token);
  };

  const logoutHandler = () => {
    setIsLoggedIn(null);
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const checkTokenValid = async () => {
    const checkToken = localStorage.getItem("token");
    if (!checkToken) {
      setIsLoggedIn(null);
      setToken(null);
      return;
    }
    const data = await checkValidUser(checkToken);
    console.log(data);
    if (!data.ok) {
      localStorage.removeItem("token");
      setIsLoggedIn(null);
      setToken(null);
      return;
    }
    setUser(data.responeUserDetails);
    setIsLoggedIn(true);
    setToken(checkToken);
  };

  const updateCurrentBalance = (newBalance) => {
    setUser((prevState) => ({
      ...prevState,
      account: {
        ...prevState.account,
        balance: user.account.balance - newBalance, // מעדכן את ה-balance לערך החדש
      },
    }));
  };
  useEffect(() => {
    checkTokenValid();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        user,
        loginHandler,
        logoutHandler,
        updateCurrentBalance,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
