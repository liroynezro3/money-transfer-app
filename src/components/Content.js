import React from "react";
import classes from "./Content.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
const Content = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {!user ? (
          <>
            <p>The best way to</p>
            <p>send money</p>
            <p>Transferring money is simpler than ever</p>
            <Link to="/register">
              <button>Join now</button>
            </Link>
          </>
        ) : (
          <>
            <p>Welcome back {`${user?.name || user?.account.name}`}</p>
            <p>To send money</p>
            <Link to="/TransferMoney">
              <button>Click Here</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Content;
