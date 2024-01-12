import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error404 from "./pages/Error404.tsx";
import Homepage from "./pages/Homepage.tsx";
import Characters from "./pages/Characters.tsx";
import Layout from "./components/Layout.tsx";
import About from "./pages/About.tsx";
import AboutMe from "./components/AboutMe.tsx";
import AboutFuturama from "./components/AboutFuturama.tsx";
import AuthPage from "./pages/AuthPage.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import Game from "./pages/Game.tsx";

const router = createBrowserRouter([
  {
    element: (
      <AuthContextProvider>
        <Layout>
          <Outlet />
        </Layout>
      </AuthContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      { path: "/game", element: <Game /> },
      {
        path: "/characters",
        element: <Characters />,
      },
      // {
      //   path: "/episodes",
      // },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "me",
            element: <AboutMe />,
          },
          {
            path: "futurama",
            element: <AboutFuturama />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
