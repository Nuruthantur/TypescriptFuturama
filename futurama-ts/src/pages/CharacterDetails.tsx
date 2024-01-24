import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useContext, useState } from "react";
// types
import { Comment } from "../@types/comment";
import { Character } from "../@types/futurama";
import ChatInput from "../components/ChatInput";
import { AuthContext } from "../context/AuthContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const CharacterDetails = () => {
  const {user } = useContext(AuthContext);
  const { id } = useParams();
  const url = id ? `https://api.sampleapis.com/futurama/characters/${id}` : "";

  const [comments, setComments] = useState<Comment[]>([]);

  const { data: character, error, loading } = useFetch<Character>(url);
  // console.log("hookResponse", character, error, loading);

  const handleComment = (userInput: string) => {
    if (!user || !id) return console.log("can't do this without user and id!")
    if (userInput.trim() === "") return alert("Type something!")
    // console.log(userInput);
    const newItem = {
      user: user?.email, 
      date: new Date(), 
      comment: userInput.trim(), 
      chId: id,
    }
    console.log("I will submit: ", newItem); 
    addDoc(collection(db, "comments"), newItem)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    }).catch((e) => {
      console.error("Error adding document: ", e);
    })
  }

  if (loading)
    return (
      <div style={{display:"grid", placeItems:"center"}}>
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div style={{display:"grid", placeItems:"center"}}>
        <h1>{error}</h1>
      </div>
    );
  return (
    <div style={{display: "flex", flexFlow: "column wrap", alignItems: "center", gap: "1rem"}}>
      <h1>Info about {character ? character.name.first : "Nobody here"} {character ? character.name.last : ""}</h1>
      <img src={character?.images.main} />
      <h3>First Name: {character ? character.name.first : "Nobody here"}</h3>
      <h3>Last Name: {character ? character.name.last : "Nobody here"}</h3>
      <h3>Home Planet: {character ? character.homePlanet : "Home Planet"}</h3>
      <h3>Occupation: {character ? character.occupation : "Occupation"}</h3>
      <h3>Gender: {character ? character.gender : "Gender"}</h3>
      <ChatInput handleSubmit={handleComment} />
    </div>
  );
};

export default CharacterDetails;
