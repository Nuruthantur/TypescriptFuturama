import { Link, Outlet, useLocation } from "react-router-dom";
// import { CSSProperties } from "react";

function About() {
  const location = useLocation();
  // const tabstyleActive: CSSProperties = {
  //   borderTop: "solid 1px black",
  //   borderRight: "solid 1px black",
  //   borderLeft: "solid 1px black",
  // };
  if (location.pathname !== "/about") return <Outlet />;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifySelf: "center",
        flexFlow: "column wrap",
      }}
    >
      <h1 style={{display: "flex", justifyContent: "center"}}>This is the About Page</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Link to={"me"}>About Me</Link>
        <Link to={"futurama"}>About Futurama</Link>
      </div>
    </div>
  );
}

export default About;
