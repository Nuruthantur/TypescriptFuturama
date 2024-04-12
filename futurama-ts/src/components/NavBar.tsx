import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// A functional component that displays a navigation bar
function NavBar() {
  // The component uses the useContext hook to access the AuthContext and retrieve the user and logout function
  // The component also uses the useNavigate hook to navigate to different pages
  const navContainerStyles = {
    height: "50px",
    border: "solid 1px black",
    display: "flex",
    gap: "1em",
    alignItems: "center",
    padding: "0 1em",
  };
  const navigation = useNavigate();
  const { user, logout } = useContext(AuthContext);

  // The component returns a nav element that contains several NavLink and button elements
  // The NavLink elements navigate to different pages, and the button elements perform various actions
  // The component also displays the user's email if they are logged in

  return (
    <nav style={navContainerStyles}>
      {/* // end removes active style from  children */}
      <NavLink to={"/"}>Homepage</NavLink>
      <NavLink to={"/characters"}>Characters</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/game"}>Game</NavLink>
      <NavLink to={"/profile"}>Profile</NavLink>

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
