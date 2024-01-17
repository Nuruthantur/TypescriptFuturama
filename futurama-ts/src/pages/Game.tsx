import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { gameFetchOK } from "../@types/questions";
import GameCard from "../components/GameCard";

const Game = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>This is the game page</h1>
      <p>Here will be some form of game</p>
    </div>
  );
};
// export default Game;

export default function CreateGamePage() {
  const location = useLocation();
  const [filterValue, setFilterValue] = useState("");
  const url = "https://api.sampleapis.com/futurama/questions";
  const { error, loading } = useFetch<gameFetchOK>(url);

  if (error)
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  if (location.pathname !== "/game") return <Outlet />;
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Testing the game function.</h1>
      <h2>Nothing here yet </h2>
      <h2>*cricket noise*</h2>
    </div>
  );
}
