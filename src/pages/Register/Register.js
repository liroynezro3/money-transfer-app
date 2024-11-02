import { useState } from "react";
import classes from "../Register/Register.module.css";
import useAPI from "../../hooks/useAPI";
const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { isLoading, error, handleRegister } = useAPI();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({ name, email, password });
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>

        <h1>Register</h1>

        <div className={classes.containerfluid}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit">Register</button>

          {isLoading && <p>isLoading</p>}

          {error && <p>Error: {error||"Something Wrong please try again later"}</p>}
        </div>
      </form>
    </div>
  );
};

export default Register;
