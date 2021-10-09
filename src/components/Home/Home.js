import React from "react";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="text-center">
      <h1 className="mb-5">User Information:</h1>
      <h2>Name: {user.displayName} </h2>
      <p>Email: {user.email} </p>
      <img src={user.photoURL} alt="" />
    </div>
  );
};

export default Home;
