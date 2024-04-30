import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

type FooterStyle = {
  backgroundColor: string;
  borderTop: string;
  bottom: string;
  color: string | undefined;
  display: string;
  padding: string;
  position: "static" | "relative" | "fixed";
  textAlign: "center";
  width: string;
  alignItems: string;
  justifyContent: string;
};

export const Footer = () => {
  const { toggleTheme } = useContext(AuthContext);
  const footerStyle: FooterStyle = {
    backgroundColor: "#f5f5f5",
    borderTop: "1px solid #ccc",

    bottom: "0",
    color: "black",
    display: "flex",
    padding: "20px 0 20px 0 ",
    position: "fixed",
    width: "90%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  };
  footerStyle.backgroundColor = toggleTheme === "light" ? "white" : "black";
  footerStyle.color = toggleTheme === "light" ? "black" : "white";
  return (
    <footer style={footerStyle}>
      <div>
        <h1 style={{ margin: "0" }}>hi mom, look at my awesome footer</h1>
      </div>
    </footer>
  );
};
