import React from "react";
import ReactDOM from "react-dom/client";
//for routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// for childer routing, ie, showing one route inside another
import { Outlet } from "react-router-dom";
/*
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant Container
 *   - Restaurant Card
 *     - Img
 *     - Name of Restaurant, Star Rating, cousine
 * Footer
 * - Copyright
 * - Links
 * - Adresses
 * - Contact
 *
 */

const styleCard = {
  backgroundColor: "#f0f0f0",
};
import Header from "./components/Header";
{
  /* to use the Header component from components folder we import it here which was exported from the location specified*/
}
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet />
      {/*this will be replaced by the rendering component from childern routing */}
    </div>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // Body component needs to be added if else i get an empty screen w8ith just header
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        //meaning resid can be dynamic
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
