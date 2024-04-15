import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) return;
  if (user)
    return (
      <div>
        <h1>hi</h1>
        <h3>Update your profile page here:</h3>

        <button
          onClick={() => {
            navigate("/update");
          }}>
          navigate!
        </button>
      </div>
    );
}

export default ProfilePage;
