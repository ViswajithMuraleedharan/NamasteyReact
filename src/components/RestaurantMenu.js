import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams();
  useEffect(() => {
    fetchMenu();
    // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.91850&lng=76.25580&restaurantId=12"
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resid);
    const json = await data.json();
    // Check the actual API response structure and adjust the path if necessary
    // console.log(json.data.cards[2].card.card.info);
    const restaurant = json.data;
    const items =
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]);
    // json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0];
    if (restaurant) {
      setResInfo(restaurant); // Assuming 'info' object contains name and cuisines
    } else {
      console.error("Restaurant data not found in the API response");
    }
  };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info; // Provide default values or handle the case where resInfo is null
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* <h3>{costForTwo}</h3> */}
      <h2>Menu</h2>
      <ul>
        {itemCards.map((itemCard) => (
          <li key={itemCard.card.info.id}>
            {itemCard.card.info.name} - {"Rs"}
            {itemCard.card.info.defaultPrice
              ? itemCard.card.info.defaultPrice / 100
              : itemCard.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
