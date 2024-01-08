import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const navContainerStyles = {
    height: "50px",
    border: "solid 1px black",
    display: "flex",
    gap: "1em",
    alignItems: "center",
    padding: "0 1em",
  };

  const location = useLocation();

  const navigation = useNavigate();

  return (
    <nav style={navContainerStyles}>
      <NavLink to={"/"}>Homepage</NavLink>
      <NavLink to={"/characters"}>Characters</NavLink>
      {/* // end removes active style from  children */}
      <NavLink to={"/about"}>About</NavLink>
      <button onClick={() => navigation(-1)}>Back</button>
    </nav>
  );
}

export default NavBar;
