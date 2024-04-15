import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// types
import { FuturamaInfo } from "../@types/info";

export default function AboutFuturama() {
  const location = useLocation();

  const [futuramaInfo, setFuturamaInfo] = useState<FuturamaInfo | null>(null);

  const getData = async () => {
    try {
      const res = await fetch("https://api.sampleapis.com/futurama/info");
      if (!res.ok) {
        throw new Error(`Error fetching Futurama info: ${res.statusText}`);
      }
      const json = await res.json();
      setFuturamaInfo(json[0]); // Access the first element (assuming single info)
    } catch (error) {
      console.error("Error fetching Futurama info:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (location.pathname !== "/about/futurama") return <Outlet />;
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h1>About Futurama stuff goes here</h1>

      {futuramaInfo ? (
        <>
          <h2>Futurama Information</h2>
          <p> Synopsis: {futuramaInfo.synopsis}</p>
          <p>Aired: {futuramaInfo.yearsAired}</p>
          <p>Creators:</p>
          <ul>
            {futuramaInfo.creators.map((creator) => (
              <li key={creator.name}>
                {creator.name} (
                {
                  <a
                    href={creator.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    {creator.url}
                  </a>
                }
                )
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading Futurama information...</p>
      )}
    </div>
  );
}

{
  //   const getFuturamaInfoData = async () => {
  //   try {
  //     const resp = await fetch("https://api.sampleapis.com/futurama/info");
  //     if (!resp.ok) {
  //       throw new Error(`Error fetching Futurama info: ${resp.statusText}`);
  //     }
  //     const json = await resp.json();
  //     setFuturamaInfo(json[0]);
  //   } catch (error) {
  //     console.error("Error fetching Futurama info: ", error);
  //   }
  // };
  // useEffect(() => {
  //   getFuturamaInfoData();
  // }, []);
  /* <div>
  {futuramaInfo ? (
    <>
      <h2>Futurama Information</h2>
      <p>{futuramaInfo.synopsis}</p>
      <p>Aired: {futuramaInfo.yearsAired}</p>
      <p>Creators:</p>
      <ul>
        {futuramaInfo.creators.map((creator) => (
          <li key={creator.name}>
            {creator.name} (
            {
              <a href={creator.url} target="_blank" rel="noopener noreferrer">
                {creator.url}
              </a>
            }
            )
          </li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading Futurama information...</p>
  )}
</div>; */
}
