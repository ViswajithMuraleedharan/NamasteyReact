import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //State variable
  // the LHS of '=' in useState declaration takes 2 parameters in a array form:- 1. the name of the variable, 2. the function we send the updated variable through.
  // the RHS of '=' in useState declaration takes the default valus of the variable as its parameter.
  // let [listOfRestaurants, setListOfRestaurants] = useState([{
  // "info":{
  //   "id": "233803",
  //   "name": "KFC",
  //   "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
  //   "locality": "MG Road",
  //   "areaName": "Ravipuram",
  //   "costForTwo": "₹400 for two",
  //   "cuisines": [
  //     "Burgers",
  //     "Biryani",
  //     "American",
  //     "Snacks",
  //     "Fast Food"
  //   ],
  //   "avgRating": 3.8,
  //   "parentId": "547",
  //   "avgRatingString": "4.5",
  //   "totalRatingsString": "5K+",
  //   "sla": {
  //     "deliveryTime": 50,
  //   },
  // }},
  // {"info":{
  //   "id": "233804",
  //   "name": "Burger King",
  //   "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
  //   "locality": "MG Road",
  //   "areaName": "Ravipuram",
  //   "costForTwo": "₹400 for two",
  //   "cuisines": [
  //     "Burgers",
  //     "Biryani",
  //     "American",
  //     "Snacks",
  //     "Fast Food"
  //   ],
  //   "avgRating": 4.7,
  //   "parentId": "547",
  //   "avgRatingString": "4.5",
  //   "totalRatingsString": "5K+",
  //   "sla": {
  //     "deliveryTime": 50,
  //   },
  // }},
  // {"info":{
  //   "id": "233805",
  //   "name": "MCD",
  //   "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
  //   "locality": "MG Road",
  //   "areaName": "Ravipuram",
  //   "costForTwo": "₹400 for two",
  //   "cuisines": [
  //     "Burgers",
  //     "Biryani",
  //     "American",
  //     "Snacks",
  //     "Fast Food"
  //   ],
  //   "avgRating": 4.7,
  //   "parentId": "547",
  //   "avgRatingString": "4.5",
  //   "totalRatingsString": "5K+",
  //   "sla": {
  //     "deliveryTime": 50,
  //   },
  // }}]);
  //normal React variable
  // let listOfRestaurants = [{
  //   "info":{
  //     "id": "233803",
  //     "name": "KFC",
  //     "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
  //     "locality": "MG Road",
  //     "areaName": "Ravipuram",
  //     "costForTwo": "₹400 for two",
  //     "cuisines": [
  //       "Burgers",
  //       "Biryani",
  //       "American",
  //       "Snacks",
  //       "Fast Food"
  //     ],
  //     "avgRating": 3.8,
  //     "parentId": "547",
  //     "avgRatingString": "4.5",
  //     "totalRatingsString": "5K+",
  //     "sla": {
  //       "deliveryTime": 50,
  //     },
  //   }},
  //   {"info":{
  //     "id": "233804",
  //     "name": "Burger King",
  //     "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
  //     "locality": "MG Road",
  //     "areaName": "Ravipuram",
  //     "costForTwo": "₹400 for two",
  //     "cuisines": [
  //       "Burgers",
  //       "Biryani",
  //       "American",
  //       "Snacks",
  //       "Fast Food"
  //     ],
  //     "avgRating": 4.7,
  //     "parentId": "547",
  //     "avgRatingString": "4.5",
  //     "totalRatingsString": "5K+",
  //     "sla": {
  //       "deliveryTime": 50,
  //     },
  //   }},
  //   {"info":{
  //     "id": "233805",
  //     "name": "MCD",
  //     "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
  //     "locality": "MG Road",
  //     "areaName": "Ravipuram",
  //     "costForTwo": "₹400 for two",
  //     "cuisines": [
  //       "Burgers",
  //       "Biryani",
  //       "American",
  //       "Snacks",
  //       "Fast Food"
  //     ],
  //     "avgRating": 4.7,
  //     "parentId": "547",
  //     "avgRatingString": "4.5",
  //     "totalRatingsString": "5K+",
  //     "sla": {
  //       "deliveryTime": 50,
  //     },
  //   }}
  // ];
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
        {/* RestaurantCard */}
        {/* <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/> */}
        {/* props */}
        {/* <RestaurantCard resName="Meghana Foods" cuisine="Diet Foods"/> This is called passing props to a component */}
        {/* <RestaurantCard resData={resObj[0]}/>
          <RestaurantCard resData={resObj[1]}/>
          <RestaurantCard resData={resObj[2]}/>
          <RestaurantCard resData={resObj[3]}/> */}
        {listOfRestaurants.map((restaurant) => {
          // we need to add a key when using a loop as it is used to uniquely identify each component
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
