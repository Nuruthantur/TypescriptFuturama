import React, { useEffect, useState } from "react";
import { Character, FetchResultNotOK, FetchResultOK } from "../@types/futurama";
import CharacterCard from "../components/CharacterCard";
import { Outlet, useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// import NavBar from "../components/NavBar";

// export default function Characters() {
//   const [characters, setCharacters] = useState<Character[]>([]);
//   const [error, setError] = useState<null | string>(null);
//   async function fetchData() {
//     try {
//       const response = await fetch(
//         `https://api.sampleapis.com/futurama/characters`
//       );
//       if (response.ok) {
//         const result = (await response.json()) as FetchResultOK;
//         // console.log(result);
//         setCharacters(result);
//       } else {
//         const result = (await response.json()) as FetchResultNotOK;
//         console.log(result);
//         setError(result.error);
//       }
//     } catch (e) {
//       // console.log(e);
//     }
//   }
//   useEffect(() => {
//     fetchData().catch((e) => console.log(e));
//   }, []);
//   // console.log(characters);
//   return (
//     <div>
//       <div
//         style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//       >
//         {characters.map((character) => {
//           return <CharacterCard key={character.id} character={character} />;
//           // message={"Hello World!"}
//         })}
//       </div>
//     </div>
//   );
// }

export default function Characters() {
  const location = useLocation();
  const [filterValue, setFilterValue] = useState("");
  const url = "https://api.sampleapis.com/futurama/characters";
  const { data, error, loading } = useFetch<FetchResultOK>(url);

  const filtered = data
    ? data.results.filter((c) =>
        c.name.first.toLowerCase().includes(filterValue.toLowerCase())
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
  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  if (location.pathname !== "/characters") return <Outlet />;
  return (
    <div>
      <div>
        <input onChange={handleInputChange} />
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {filtered.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
          // message={"Hello World!"}
        })}
      </div>
    </div>
  );
}
