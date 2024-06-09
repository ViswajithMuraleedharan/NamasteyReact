import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  let [filteredlistOfRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
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
  //Conditional Rendering
  // if (listOfRestaurants.length == 0) {
  //   return <Shimmer />;
  // }
  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            // here the value of input tag is bound to the usestate abd its value is "", when typing the value is not updated in the usestate so it is not reflected in the input tag
            // to make the input value visible I need to change it in the usestate, so we need to use onchange to override usestate value
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredlistOfRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
