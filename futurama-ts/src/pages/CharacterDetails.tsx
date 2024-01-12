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
    </div>
  );
};

export default CharacterDetails;
