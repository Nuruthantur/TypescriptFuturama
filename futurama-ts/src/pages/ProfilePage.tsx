import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>hi</h1>
      <h2>This is {user?.email}'s profile</h2>
      {/* <h3>Your current score is: {user?.score}</h3> */}
    </div>
  );
}

export default ProfilePage;
