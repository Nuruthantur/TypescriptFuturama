import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Component for updating user profile information
function UpdateProfilePage() {
  // Initialize the useNavigate hook to navigate between pages
  const navigate = useNavigate();

  // Set up state variables for user profile information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  // Function to handle form submission
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hi mom!");
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {/* <label>Date of Birth</label>
          <input
            type="text"
            placeholder="Date of birth"
            name="birthDate"
            value={formData.birthDate}
            onChange={(e) => handleInputChange(e)}
          /> */}
        <label>Bio</label>
        <input
          type="text"
          name="bio"
          placeholder="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Update</button>
        {/* <button type="submit">{loading ? "Loading..." : submit}</button> */}
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
