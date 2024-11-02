import React, { useState, useContext } from "react";
import classes from "./Sidebar.module.css"
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AuthContext from "../../context/AuthContext";

const SideBar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);
  const {isLoggedIn} = useContext(AuthContext);

  const handleNavBar = () => {
    setOpenNavBar((prevstate) => !prevstate);
  };

  return (
    <div className={`${classes.container} ${openNavBar ? classes.open : classes.close}`}>
      <div className={`${classes.sidebar} ${openNavBar ? classes.open : classes.close}`}>
        <NavLink to={"/"} className={({ isActive }) => (isActive ? `${classes.active} ${classes.link}` : classes.link)}>
          Home
        </NavLink>
        {isLoggedIn&&<NavLink to={"/Profile"} className={({ isActive }) => (isActive ? `${classes.active} ${classes.link}` : classes.link)}>
          Profile
        </NavLink>}
        {!isLoggedIn&&<NavLink to={"/Register"} className={({ isActive }) => (isActive ? `${classes.active} ${classes.link}` : classes.link)}>
          Register
        </NavLink>}
        {!isLoggedIn&&<NavLink to={"/Login"} className={({ isActive }) => (isActive ? `${classes.active} ${classes.link}` : classes.link)}>
          Login
        </NavLink>}
        {isLoggedIn&&<NavLink to={"/TransferMoney"} className={({ isActive }) => (isActive ? `${classes.active} ${classes.link}` : classes.link)}>
          Transfer Money
        </NavLink>}
      </div>
      <button className={classes.navbarbutton} onClick={handleNavBar}>
        {openNavBar ? <MenuOpenIcon className={classes.icon} /> : <MenuIcon className={classes.icon} />}
      </button>
      </div>
  );
};

export default SideBar;
