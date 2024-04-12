import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  // const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const callNavigate = () => {
    navigate("/update");
  };

  return (
    <div>
      <h1>hi</h1>
      <h3>
        Update your profile page here:{" "}
        <button onClick={callNavigate}>navigate!</button>{" "}
      </h3>
    </div>
  );
}

export default ProfilePage;
