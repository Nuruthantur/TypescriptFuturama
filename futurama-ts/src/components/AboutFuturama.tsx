import { Outlet, useLocation } from "react-router-dom";
// hooks
import useFetch from "../hooks/useFetch";
// types
import { FuturamaInfo } from "../@types/info";

const AboutFuturama = () => {
  const location = useLocation();
  const url = `https://api.sampleapis.com/futurama/info`;
  const { data: data, error, loading } = useFetch<FuturamaInfo>(url);
  // console.log("hookResponse for Info", data, error, loading);
  console.log("data goes here: ", data);

  if (error)
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  if (loading)
    return (
      // centering a div, version 1: {position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
      // centering a div, version 2: {display:"flex", alignItems:"center", justifyContent:"center"}
      // centering a div, version 3 (fastest): {display:"grid",placeItems:"center"}
      <div style={{ display: "grid", placeItems: "center" }}>
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
      }}>
      <h1>About Futurama stuff goes here</h1>
      <h2>Synopsis {data ? data?.synopsis : "nothing to display"}</h2>
      <h2>Years aired: {data ? data.yearsAired : "Nothing to display"}</h2>
    </div>
  );
};
export default AboutFuturama;
// [0].creators
// [0].yearsAired

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
