import React, { useContext } from "react";
import { Character } from "../@types/futurama";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

type Props = {
  character: Character;
  message?: string;
};

function CharacterCard({ character }: Props) {
  //message
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const divStyle: React.CSSProperties = {
    border: "black 1px solid",
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    width: "150px",
  };
  return (
    <div style={divStyle}>
      <h3>
        {character.name.first} {character.name.last}
      </h3>
      {/* <p style={{ wordBreak: "break-all" }}>{character.sayings[0]}</p> */}
      <div>
        {/* <button>More Info</button> */}
        {/* <p>{message?.toLocaleLowerCase()}</p> */}
        <img
          src={character.images.main}
          style={{ width: "150px", height: "150px" }}
        />
        {user && (
          <button onClick={() => navigate(`${character.id}`)}>
            Learn more about {character.name.first} {character.name.last}
          </button>
        )}
      </div>
    </div>
  );
}

export default CharacterCard;
