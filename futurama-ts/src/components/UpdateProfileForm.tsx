import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { collection, doc, updateDoc } from "firebase/firestore";

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

// type activeUser = {
//   id: string;
//   displayName?: string;
//   firstName?: string;
//   lastName?: string;
//   bio?: string;
//   location?: string;
// };

// Component for updating user profile information
const UpdateProfileForm = ({ submitTitle }: Props) => {
  const { loading, user, getMe } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    displayName: "",
    firstName: "",
    lastName: "",
    bio: "",
    location: "",
  });
  const navigate = useNavigate();
  //TODO - fix this
  const activeUser = getMe();
  console.log(activeUser);
  //TODO - updating the profile creates a NEW document in the users collection instead of updating the current one
  // const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!formData)
  //     return alert("you have to change something to update your data");
  //   const updatedItem = {
  //     user: user?.uid,
  //     date: new Date(),
  //     firstName: formData.firstName,
  //     lastName: formData.lastName,
  //     bio: formData.bio,
  //     location: formData.location,
  //   };
  //   console.log(updatedItem);
  //   try {
  //     const docRef = await addDoc(collection(db, "users"), updatedItem);
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (error) {
  //     console.log("Error adding document: ", error);
  //   }
  // };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData)
      return alert("you have to change something to update your data");

    // Get the reference to the document you want to update
    //NOTE - do a check for user.uid inside of the document of user (not if the doc == user.uid)
    const docRef = doc(collection(db, "users"), user?.uid);

    try {
      // Update the document
      await updateDoc(docRef, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        bio: formData.bio,
        location: formData.location,
      });
      console.log("Document updated successfully");
    } catch (error) {
      console.log("Error updating document: ", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   if (activeUser) {
  //     setFormData(activeUser);
  //   }
  // }, []);

  return (
    <div style={{}}>
      <form onSubmit={handleFormSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          placeholder="display name"
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
        />
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
