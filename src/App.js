import React from "react";
import ReactDOM from "react-dom/client";

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
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
