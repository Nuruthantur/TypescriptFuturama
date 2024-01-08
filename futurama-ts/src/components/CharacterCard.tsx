import React from "react";
import { Character } from "../@types/futurama";

type Props = {
    character: Character,
    message?: string
}

function CharacterCard({ character, message }: Props) {
  // function CharacterCard ({ character }:{ character: Character }) {
  const divStyle: React.CSSProperties = { 
    border: "black 1px solid", 
    padding: "1em", 
    display: "flex", 
    flexDirection: "column", 
    width: "150px"
  }
  return (
    <div style={divStyle}>
      <p>{character.name.first} {character.name.last }</p>
      <img src={character.images.main} style={{ width: "150px", height: "150px" }} />
      <p>{character.sayings[0]}</p>
      {/* <p>{message?.toLocaleLowerCase()}</p> */}
    </div>
  )
}

export default CharacterCard