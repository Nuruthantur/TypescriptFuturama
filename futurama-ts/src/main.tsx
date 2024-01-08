import React from "react";
import ReactDOM from "react-dom/client";
import Characters from "./pages/Characters.tsx";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error404 from "./pages/Error404.tsx";
import Layout from "./components/Layout.tsx";
import Homepage from "./pages/Homepage.tsx";
import About from "./pages/About.tsx";
import AboutMe from "./components/AboutMe.tsx";
import AboutFuturama from "./components/AboutFuturama.tsx";

const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/characters",
        element: <Characters />,
      },
      {
        path: "/episodes",
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
