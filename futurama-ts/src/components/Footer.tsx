import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

type FooterStyle = {
  backgroundColor: string;
  padding: string;
  borderTop: string;
  textAlign: "center";
  position: "static" | "relative" | "fixed";
  bottom: string;
  width: string;
  color: string | undefined;
};
export const Footer = () => {
  const { toggleTheme, toggleThemeHandler } = useContext(AuthContext);
  const footerStyle: FooterStyle = {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderTop: "1px solid #ccc",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    width: "100%",
    color: "black",
  };
  footerStyle.backgroundColor = toggleTheme === "light" ? "white" : "black";
  footerStyle.color = toggleTheme === "light" ? "black" : "white";
  return (
    <footer style={footerStyle}>
      <h1 style={{ margin: "0" }}>hi mom</h1>
    </footer>
  );
};
