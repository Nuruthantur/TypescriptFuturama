import React, { useEffect, useState } from 'react'
import { Character } from './@types/futurama';
import CharacterCard from './CharacterCard';



function App2() {
    const [characters, setCharacters] = useState<Character[]>([]);
    async function fetchData() {
        try {
            const response = await fetch(`https://api.sampleapis.com/futurama/characters`);

        }
        catch (e) {
            console.log(e);
        }
    }


  return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        { characters.map((character) => {
          return <CharacterCard key={character.id} character={character} message={"Hello World!"}/>
        }) }
        </div>
          

    </div>
  )
}

export default App2