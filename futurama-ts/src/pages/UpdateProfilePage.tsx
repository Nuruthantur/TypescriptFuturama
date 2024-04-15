import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Component for updating user profile information
function UpdateProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    location: "",
  });
  // Initialize the useNavigate hook to navigate between pages
  const navigate = useNavigate();

  const { loading } = useContext(AuthContext);

  // Function to handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hi mom!");
    if (!formData)
      return alert("you have to change something to update your data");
    //   submit({...formData, [e.target.type]: e.target.value})
  };

  // Function to handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Render the form for updating user profile information
  return (
    <div style={{}}>
      <form onSubmit={handleFormSubmit}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label>Bio</label>
        <input
          type="text"
          name="bio"
          placeholder="bio"
          value={formData.bio}
          onChange={handleChange}
        />
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <button type="submit">{loading ? loading : "submit"}</button>
      </form>
      <button
        onClick={() => {
          navigate("/profile");
        }}>
        Got back to Profile Page
      </button>
    </div>
  );
}

export default UpdateProfilePage;
