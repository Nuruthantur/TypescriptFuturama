import { Link, Outlet, useLocation } from "react-router-dom";
import { CSSProperties } from "react";

function About() {
  const location = useLocation();
  const tabstyleActive: CSSProperties = {
    borderTop: "solid 1px black",
    borderRight: "solid 1px black",
    borderLeft: "solid 1px black",
  };
  if (location.pathname !== "/about") return <Outlet />;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexFlow: "row wrap",
      }}
    >
      <h1>This is the About Page</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "80vw",
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
