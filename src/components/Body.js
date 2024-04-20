import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(resObj);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("button clicked");
            // listOfRestaurants = listOfRestaurants.filter((res)=>res.info.avgRating>4); //this wont change the ui
            //filtering the list and reflecting it in ui
            filteredlistOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredlistOfRestaurants);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Button
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
