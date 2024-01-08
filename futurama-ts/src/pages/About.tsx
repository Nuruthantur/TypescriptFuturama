import { Link, Outlet, useLocation } from "react-router-dom";

function About() {
  const location = useLocation();

  if (location.pathname !== "/about") return <Outlet />;
  return (
    <div>
      <h1>This is the About Page</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "80vw",
        }}
      >
        <Link to={"me"}>About Me</Link>
        <Link to={"futurama"}>About Futurama</Link>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}

export default About;
