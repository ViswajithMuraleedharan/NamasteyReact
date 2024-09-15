import React, { lazy, Suspense, useEffect, useState } from "react";
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
// import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
// import Grocery from "./components/Grocery";
//Chunking
//Code splitting
//Dynamic bundling
//Lazy loading
//on demand loading
// dynamic importing
// lazy loading is done by using lazy() function which takes a call back with thwe import() function which takes the path of the component as a  parameter.
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  //Authentication
  useEffect(() => {
    const data = {
      name: "Viswajith",
    };
    setUserName(data.name);
  }, []);
  return (
    <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        {/* <Body /> */}
        <Outlet />
        {/*this will be replaced by the rendering component from childern routing */}
      </div>
    </userContext.Provider>
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
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        // The <Suspense></Suspense> is used to delay the calling of the component to ensure no error due to delay
        element: (
          //we can pass a fallback to the suspense which is loaded when the component loading fails or between the
          // <Suspense fallback={<Shimmer></Shimmer>}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
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
