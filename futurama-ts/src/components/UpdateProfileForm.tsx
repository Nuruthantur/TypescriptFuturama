import { FormEvent, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getAuth, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

type Props = {
  submitTitle: string;
  //   submit: (
  //     firstName: string,
  //     lastName: string,
  //     bio: string,
  //     location: string
  //   ) => void;
};

// Component for updating user profile information
const UpdateProfileForm = ({ submitTitle }: Props) => {
  const { user, loading } = useContext(AuthContext);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    location: "",
  });
  const navigate = useNavigate();

  // the updateProfile function can ONLY be used for displayname and photoURL!
  //   const auth = getAuth();
  //   if (auth.currentUser) {
  //     updateProfile(auth.currentUser, {
  //       displayName: "Jane Q. User",
  //     })
  //       .then(() => {
  //         console.log("profile updated");
  //         // Profile updated!
  //         // ...
  //       })
  //       .catch((error: string) => {
  //         console.log("could not update profile", error);
  //         // An error occurred
  //         // ...
  //       });
  //   } else {
  //     console.log("No current user to update profile");
  //   }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData)
      return alert("you have to change something to update your data");
    const updatedItem = {
      user: user?.uid,
      date: new Date(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      bio: formData.bio,
      location: formData.location,
      id: id,
    };
    console.log(updatedItem);
    try {
      const docRef = await addDoc(collection(db, "users"), updatedItem);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log("Error adding document: ", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        <button type="submit">{loading ? loading : submitTitle}</button>
      </form>
      <button
        onClick={() => {
          navigate("/profile");
        }}>
        Got back to Profile Page
      </button>
    </div>
  );
};

export default UpdateProfileForm;
