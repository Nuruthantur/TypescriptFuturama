import React, { useContext } from "react";
import { gameResult } from "../@types/questions";
import { AuthContext } from "../context/AuthContext";

type Props = {
  game: gameResult;
  message?: string;
};

export default function GameCard({ game }: Props) {
  // Destructuring the user object from the AuthContext
  const { user } = useContext(AuthContext);

  // Defining the style object for the div element
  const divStyle: React.CSSProperties = {
    border: "black 1px solid",
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    width: "200px",
  };
  return (
    <div style={divStyle}>
      {/* Displaying the question number */}
      <h4>Question Number {game.id}</h4>

      <div>
        {/* Displaying the possible answers */}
        <h3> {game.possibleAnswers}</h3>

        {/* Rendering a button for checking the answer if the user is authenticated */}
        {user && <button>Check your answer for {game.id}</button>}
      </div>
    </div>
  );
}
