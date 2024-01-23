import { useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// hooks
import useFetch from "../hooks/useFetch";
// types
import { FuturamaInfo } from "../@types/info";
import { FetchResultOK } from "../@types/futurama";
import {useEffect, useState} from 'react';

type Props = {
  data: FuturamaInfo;
  message?: string;
};

// export default function AboutFuturama ({ data }: Props) {
//   return (
//     <div>
//       <h2>{data.synopsis}</h2>
//       <h3>{data.yearsAired}</h3>
//     </div>
//     )
//   }





// export default function AboutFuturama ({data}:Props) {
//   const divStyle: React.CSSProperties = {
//     border: "black 1px solid",
//     padding: "1em",
//     display: "flex",
//     flexDirection: "column",
//     textAlign: "center",
//     width: "150px",
//   };
//   return(
//     <div style={divStyle}>
//       <h3>{ data.synopsis}</h3>
//     </div>
//   )
// }


// maybe works

const AboutFuturama = () => {
  const location = useLocation();
  const url = `https://api.sampleapis.com/futurama/info`;
  const { data, error, loading } = useFetch<FuturamaInfo>(url);
  console.log("hookResponse for Info", data, error, loading);
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
  if (location.pathname !== "/about/futurama") return <Outlet />;
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>About Futurama stuff goes here</h1>
      <h2>Synopsis {data?.synopsis}</h2>
      <h2>Years aired: {data ? data.yearsAired : "Nothing to display"}</h2>
    </div>
  );
};
export default AboutFuturama

// export default function AboutFuturama() {
//   const [data, setData] = useState("");
//   const getData = async () => {
//     const resp = await fetch('https://api.sampleapis.com/futurama/info');
//     const json = await resp.json();
//     setData(json);
//   };console.log(data)
//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexFlow: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <h1>About Futurama </h1>
//       <h2>Creators</h2>
//       <h2>Synopsis</h2> 
//     </div>
//   )
// }




// const AboutFuturamaPage = () => {
//   const url = `https://api.sampleapis.com/futurama/info`,

// }

// https://api.sampleapis.com/futurama/info
