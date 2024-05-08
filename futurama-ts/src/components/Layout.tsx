import React from "react";
import NavBar from "./NavBar";
import { Footer } from "./Footer/Footer";
import "../index.css";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
