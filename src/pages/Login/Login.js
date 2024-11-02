import React, { useState } from "react";
import classes from "../Login/Login.module.css";
import useAPI from "../../hooks/useAPI";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { error, isLoading, handleLogin } = useAPI();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({ email, password });
  };
  
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className={classes.containerfluid}>
          <label>Email:</label>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Password:</label>
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Login</button>
          {isLoading && <p>is loading</p>}
          {error && <p>Error: {error||"Something Wrong please try again later"}</p>}
        </div>
      </form>
    </div>
  );
};

export default Login;
