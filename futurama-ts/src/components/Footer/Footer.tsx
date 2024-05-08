import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

type FooterStyle = {
  backgroundColor: string;
  borderTop: string;
  bottom: string;
  color: string | undefined;
  display: string;
  padding: string;
  marginTop: string;
  position: "static" | "relative" | "fixed";

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
    marginTop: "100px",
    display: "flex",
    padding: "10px 0 10px 0 ",
    position: "relative",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
  };
  footerStyle.backgroundColor = toggleTheme === "light" ? "white" : "black";
  footerStyle.color = toggleTheme === "light" ? "black" : "white";
  return (
    <footer style={footerStyle}>
      <div>
        <h1>hi mom, look at my awesome footer</h1>
      </div>
    </footer>
  );
};
