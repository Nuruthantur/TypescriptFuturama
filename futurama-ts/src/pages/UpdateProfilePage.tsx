import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function UpdateProfilePage() {
  const { loading } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDcate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  // const [image, setImage] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // userName
  // firstName
  // lastName
  // birthDate
  // aboutYourSelf
  // travelingDates
  // travelingDestinations
  // hobbies
  // userPicture

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        //    if (!email || !password) return alert("all fields must be included");
        console.log("submitting");
        //    submit;
      }}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => console.log(e)}
      />
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={(e) => console.log(e)}
      />
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={(e) => console.log(e)}
      />
      <input
        type="text"
        name="birthDcate"
        value={birthDcate}
        onChange={(e) => console.log(e)}
      />
      <input
        type="text"
        name="gender"
        value={gender}
        onChange={(e) => console.log(e)}
      />
      <input
        type="text"
        name="bio"
        value={bio}
        onChange={(e) => console.log(e)}
      />
      <input
        type="text"
        name="location"
        value={location}
        onChange={(e) => console.log(e)}
      />
      <button type="submit">Update</button>
      {/* <button type="submit">{loading ? "Loading..." : submit}</button> */}
    </form>
  );
}

export default UpdateProfilePage;
