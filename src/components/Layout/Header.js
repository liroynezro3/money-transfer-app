import React, { useContext } from "react";
import classes from "./Header.module.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
const Header = () => {
  const { isLoggedIn, logoutHandler } = useContext(AuthContext);
  const logoutFunc = () => {
    logoutHandler();
  };
  return (
    <div className={classes.header}>
      <Link to="/">
        <img src={Logo} alt="logo"></img>
      </Link>
      {isLoggedIn&&<Link to="/" className={classes.logout} onClick={logoutFunc}>
        Logout
      </Link>}
    </div>
  );
};
export default Header;
