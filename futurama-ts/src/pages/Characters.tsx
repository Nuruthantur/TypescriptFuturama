import React, { useState } from "react";
import { FetchResultOK } from "../@types/futurama";
import CharacterCard from "../components/CharacterCard";
import { Outlet, useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/spinners/Spinner";

export default function Characters() {
  const location = useLocation();
  const [filterValue, setFilterValue] = useState("");
  const url = "https://api.sampleapis.com/futurama/characters";
  const { data, error, loading } = useFetch<FetchResultOK>(url);

  const filtered = data
    ? data.filter(
        (c) =>
          c.name.first.toLowerCase().includes(filterValue.toLowerCase()) ||
          c.name.middle.toLowerCase().includes(filterValue.toLowerCase()) ||
          c.name.last.toLowerCase().includes(filterValue.toLowerCase())
      )
    : [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };
  if (error)
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  if (loading) return <Spinner />;

  if (location.pathname !== "/characters") return <Outlet />;
  return (
    <div>
      <div
        style={{
          margin: "1em 0",
          padding: "0 1em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexFlow: "column wrap",
          gap: "1em",
        }}>
        <input onChange={handleInputChange} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexFlow: "row wrap",
          gap: "1em",
        }}>
        {filtered.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </div>
    </div>
  );
}
