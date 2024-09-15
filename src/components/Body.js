import RestaurantCard, { WithPromototedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredlistOfRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardWithPromoted = WithPromototedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(userContext);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.502804400000002&lng=76.9722271&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return (
      <h1>Looks like you're offline! Please check your internet connection</h1>
    );
  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border-solid border-black"
            value={searchText}
            // here the value of input tag is bound to the usestate abd its value is "", when typing the value is not updated in the usestate so it is not reflected in the input tag
            // to make the input value visible I need to change it in the usestate, so we need to use onchange to override usestate value
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList); // Update the filtered list state
            }}
          >
            Top Rated Button
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName :</label>
          <input
            value={loggedInUser}
            className="border border-black p-2"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredlistOfRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.5 ? (
                <RestaurantCardWithPromoted resData={restaurant} />
              ) : (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
