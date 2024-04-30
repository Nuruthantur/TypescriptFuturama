import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Sun, Moon } from "react-feather";

type NavContainerStyle = {
  backgroundColor: string;
  border: string;
  color: string;
  display: string;
  gap: string;
  height: string;
  padding: string;
  width: string;
  alignItems: string;
  justifyContent: string;
};
// A functional component that displays a navigation bar
function NavBar() {
  const navContainerStyle: NavContainerStyle = {
    height: "50px",
    border: "solid 1px black",
    display: "flex",
    gap: "1em",
    padding: "0 1em",
    backgroundColor: "#4AE0FF",
    color: "black",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  };
  const navigation = useNavigate();
  const { user, logout, toggleTheme, toggleThemeHandler } =
    useContext(AuthContext);

  navContainerStyle.backgroundColor =
    toggleTheme === "light" ? "white" : "black";
  navContainerStyle.color = toggleTheme === "light" ? "black" : "white";

  // The component returns a nav element that contains several NavLink and button elements
  // The NavLink elements navigate to different pages, and the button elements perform various actions
  // The component also displays the user's email if they are logged in

  return (
    <nav style={navContainerStyle}>
      {/* // end removes active style from  children */}
      <NavLink to={"/"}>Homepage</NavLink>
      <NavLink to={"/characters"}>Characters</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/game"}>Game</NavLink>
      {/* <NavLink to={"/update"}>Update</NavLink> */}
      {!user ? (
        <NavLink to={"/auth"}>Login</NavLink>
      ) : (
        <>
          <NavLink to={"/profile"}>Profile</NavLink>

          <button onClick={logout}>Logout</button>
        </>
      )}
      <button onClick={() => navigation(-1)}>Back</button>
      <button
        onClick={() => navigation("/profile")}
        style={{ backgroundColor: "white", border: "none" }}>
        {user && user.email}
      </button>

      <button
        onClick={() => toggleThemeHandler()}
        style={{ backgroundColor: "white", border: "none" }}>
        {toggleTheme === "light" ? <Moon /> : <Sun />}
      </button>
    </nav>
  );
}

export default NavBar;
