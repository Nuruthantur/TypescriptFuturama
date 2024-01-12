import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
  const navContainerStyles = {
    height: "50px",
    border: "solid 1px black",
    display: "flex",
    gap: "1em",
    alignItems: "center",
    padding: "0 1em",
  };

  // const location = useLocation();

  const navigation = useNavigate();

  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={navContainerStyles}>
      <NavLink to={"/"}>Homepage</NavLink>

      <NavLink to={"/characters"}>Characters</NavLink>
      {/* // end removes active style from  children */}

      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/game"}>Game</NavLink>
      {!user ? (
        <NavLink to={"/auth"}>Login</NavLink>
      ) : (
        <button onClick={logout}>Logout</button>
      )}

      <button onClick={() => navigation(-1)}>Back</button>
    </nav>
  );
}

export default NavBar;
