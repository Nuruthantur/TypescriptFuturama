import { Outlet, useLocation } from "react-router-dom";
// hooks
import useFetch from "../hooks/useFetch";
// types
import { FuturamaInfo } from "../@types/info";
import Spinner from "./spinners/Spinner";
// import { useEffect, useState } from "react";

export default function AboutFuturama() {
  const location = useLocation();
  const url = `https://api.sampleapis.com/futurama/info`;
  const { data: data, error, loading } = useFetch<FuturamaInfo>(url);
  console.log("hookResponse for Info", data, error, loading);
  // console.log("data goes here: ", data);

  if (error)
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  if (loading) return <Spinner />;
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
      <h2>Synopsis {data ? data?.synopsis : "nothing to display"}</h2>
      <h2>Years aired: {data ? data.yearsAired : "Nothing to display"}</h2>
    </div>
  );
}

// export default function AboutFuturama() {
//   const [data, setData] = useState();
//   const getData = async () => {
//     const resp = await fetch("https://api.sampleapis.com/futurama/info");
//     const json = await resp.json();
//     setData(json);
//   };
//   console.log(data);
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
//       }}>
//       <h1>About Futurama </h1>
//       <h2>Creators {data?.creator ?? "nothing to display"}</h2>
//       <h2>Synopsis</h2>
//     </div>
//   );
// }
