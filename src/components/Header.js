import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log("Header Rendered");
  //useEffect takes 2 arguments:- call back function and dependency array.
  // useEffect(() => {
  //   console.log("UseEffect rendered");
  // });
  // if no dependency array is given, the useEffect is called everytime the component is rendered
  // useEffect(() => {
  //   console.log("UseEffect rendered only once");
  // }, []);
  // if the the dependency array contains a useEffect constant, the useEffect will be called when that useState is updated.
  useEffect(() => {
    console.log("UseEffect rendered");
  }, [btnName]);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            //thisb doesnot render the ui
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
{
  /* we export the component from here so that it can be impoerted in the main code */
}
