import React, { useContext } from "react";
import { gameResult } from "../@types/questions";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

type Props = {
  game: gameResult;
  message?: string;
};

export default function GameCard({ game }: Props) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
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
      <h4>Question Number {game.id}</h4>
      <div>
        <h3> {game.possibleAnswers}</h3>
        {user && <button>Check your answer for {game.id}</button>}
      </div>
    </div>
  );
}
