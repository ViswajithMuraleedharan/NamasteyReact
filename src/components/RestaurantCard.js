import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props)=>{  {/* This is how we pass the prop */} {/* we can also destructure the props */}
  // console.log(props); {/* we get the props as objects, the number of objects will be the number of times the RestaurantCard component is called. Here i got 2 objects */}
  const { resData } = props;
  const {name,cuisines,avgRating,costForTwo,sla} =resData?.info;
  return (
    //applying react component inside {}
    // <div className="res-card" style={styleCard}>       
    // OR
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
    <img alt="res-logo" className="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}/>
      {/* <h3>Meghana Foods</h3> Statically giving value */}
      <h3>{name}</h3>
      {/* <h4>Salad, Western</h4> */}
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}
 export default RestaurantCard;