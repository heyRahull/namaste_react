import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../src/components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestMenu from "./components/RestMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";
const Instamart = lazy(() => import("./components/Instamart.js"));

/*
  Header
    -logo(title)
    -list items(right side)
    -cart
  Body
    -SearchBar
    -restaurantlist
      -Restaurant card (many cards)
        -Image
        -Name
        -rating
        -cuisines
  Footer
    -links
    -copyright
  */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Body /> */}
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
