import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Character } from "../@types/futurama";

const CharacterDetails = () => {
  const { id } = useParams();
  const url = id ? `https://api.sampleapis.com/futurama/characters/${id}` : "";

  const { data: character, error, loading } = useFetch<Character>(url);
  console.log("hookResponse", character, error, loading);

  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  return (
    <div>
      <h1>Info about {character ? character.name.first : "Nobody here"}</h1>
      <h3>First Name: {character ? character.name.first : "Nobody here"}</h3>
      <h3>Last Name: {character ? character.name.last : "Nobody here"}</h3>
      <h3>Home Planet: {character ? character.homePlanet : "Home Planet"}</h3>
      <h3>Occupation: {character ? character.occupation : "Occupation"}</h3>
      <h3>Gender: {character ? character.gender : "Gender"}</h3>
    </div>
  );
};

export default CharacterDetails;
