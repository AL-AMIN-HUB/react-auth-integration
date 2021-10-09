import React from "react";
import { NavLink } from "react-router-dom";
import userFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInGoogle } = userFirebase();
  return (
    <div className="text-center">
      <h2 className="mb-5">Please Login</h2>
      <button onClick={signInGoogle} className="mb-5 btn btn-success fs-5">
        Google Sign In
      </button>
      <br />
      <NavLink to="/register">New User?</NavLink>
    </div>
  );
};

export default Login;
