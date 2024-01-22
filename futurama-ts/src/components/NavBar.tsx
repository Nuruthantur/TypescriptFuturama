import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
      {/* // end removes active style from  children */}
      <NavLink to={"/"}>Homepage</NavLink>
      <NavLink to={"/characters"}>Characters</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/game"}>Game</NavLink>
      {!user ? (
        <NavLink to={"/auth"}>Login</NavLink>
      ) : (
        <button onClick={logout}>Logout</button>
      )}

      <button onClick={() => navigation(-1)}>Back</button>
      {user && <p>{user.email}</p>}
    </nav>
  );
}

export default NavBar;
