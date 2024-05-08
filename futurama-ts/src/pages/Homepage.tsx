import { useContext } from "react";
import Counter from "../components/.Counter";
import React from "react";
import { AuthContext } from "../context/AuthContext";

const Homepage = () => {
  const { user, getMe } = useContext(AuthContext);
  console.log(user, getMe);
  return (
    <div style={{ textAlign: "center", minHeight: "100vh" }}>
      <h1>This is the homepage</h1>
      <h2>Hi {user?.displayName || "Anonymous"}</h2>
      <p>Welcome to my App!</p>
      <p>More content coming soon.</p>
      <Counter></Counter>
    </div>
  );
};

export default Homepage;
