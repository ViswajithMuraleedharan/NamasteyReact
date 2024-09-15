import { useState, useEffect, useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  const { loggedInUser } = useContext(userContext);
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-400">
      <img
        alt="res-logo"
        className="res-logo rounded-lg"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

//Higher order component
//input: RestaurantCard
const WithPromototedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
export { WithPromototedLabel };
