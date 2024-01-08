import React, { useEffect, useState } from 'react'
import { Character, FetchResultNotOK, FetchResultOK } from './@types/futurama';
// import CharacterCard from './CharacterCard';



function App2() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [error, setError] = useState<null | string>(null);
    async function fetchData() {
        try {
            const response = await fetch(`https://api.sampleapis.com/futurama/characters`);
            if (response.ok) {
                const result = await response.json() as FetchResultOK;
                console.log(result);
                setCharacters(result.results);
            } else {
                const result = await response.json() as FetchResultNotOK;
                console.log(result);
                setError(result.error);
            }
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        fetchData().catch((e) => console.log(e))
    })

  return (
      <div>
        {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
        { characters.map((character) => {
          return <CharacterCard key={character.id} character={character} message={"Hello World!"}/>
        }) }
        </div> */}
          

    </div>
  )
}

export default App2