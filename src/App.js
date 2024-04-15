// const heading = React.createElement(
//   "h1",
//   {
// id: "heading",
//   },
//   "Hello World from React!"
// );

/* <div id="parent">
  <div id ="child">
    <h1>I'm a h1 tag</h1>
  </div>
</div> */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
// "div",
// { id: "child" },
// React.createElement("h1", {}, "I'm a h1 tag")
//   )
// );

/* <div id="parent">
  <div id ="child1">
    <h1>I'm a h1 tag</h1>
    <h2>I'm a h2 tag</h2>
  </div>
  <div id ="child2">
    <h1>I'm a h1 tag</h1>
    <h2>I'm a h2 tag</h2>
  </div>
</div> */
// import React from "react";
// import ReactDOM from 'react-dom';
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I'm a h1 tag"),
//     React.createElement("h2", {}, "I'm a h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm a h1 tag"),
//     React.createElement("h2", {}, "I'm a h2 tag"),
//   ]),
// ]);

// // console.log(heading); // this gives a React element which is a js object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root); // gives a ReactDOM object.
// // root.render(heading); // takes the object and create the h1 tag and place it in render
// root.render(parent);


//third lesson

// import React from "react";
// import ReactDOM from 'react-dom/client';

// const h1 = React.createElement('h1',{id:"heading"},"NamasteyReact~");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(h1);
// root.render(h1);

// JSX

// creating h1 using JSX
//JSX is not understood by js engine, but it is transpiled by parcel using babel.
//babel converts const JSXheading = <h1 id="heading">NamasteyReact</h1>; to const h1 = React.createElement('h1',{id:"heading"},"NamasteyReact~");

// const JSXheading = <h1 id="heading">NamasteyReact using JSX</h1>;

// //writing multiple lines of JSX
// const JSXpara = (<p id="para" className="para">
//   Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vitae molestias error quia beatae! Ab hic soluta assumenda eaque vitae voluptate, veritatis deleniti ea!
// </p>);
// console.log(JSXheading);

// //React Component
// //2 types:- functional component, class based component

// //Functional Component
// const HeadingFunctionalComponent = ()=>{
//   return <h1>NamasteyReact from Functional Component</h1>;
// }

// const num=1200;
// const ParaComponent = ()=>(
//   <div className="container">
//     {/* i can put any js code in JSX using{} */}
//   <h1>{num}</h1>
//   <h2>{num*80}</h2>
//   {/* we can pass the JSX element using{} */}
//   {JSXheading}
//   <HeadingFunctionalComponent/>
//   {/* This can also be called as
//   <HeadingFunctionalComponent></HeadingFunctionalComponent>
//   or
//   {HeadingFunctionalComponent()}; */}
//     <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vitae molestias error quia beatae! Ab hic soluta assumenda eaque vitae voluptate, veritatis deleniti ea!
//     </p>
//   </div>
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ParaComponent/>);

//forth lesson
import React from "react";
import ReactDOM from 'react-dom/client';

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
// Moving the Header part in src/components/Header.js
// const Header = ()=>{
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRyxCKqiXP_AZKJvtCv9xqYmky_FAyhopEmg&s"/>
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   )
// }

//writing inline style using react
// writing css as a react component
const styleCard = {
  backgroundColor: "#f0f0f0",
}
// const RestaurantCard = (props)=>{  {/* This is how we pass the prop */} {/* we can also destructure the props */}
//   // console.log(props); {/* we get the props as objects, the number of objects will be the number of times the RestaurantCard component is called. Here i got 2 objects */}
//   const { resData } = props;
//   const {name,cuisines,avgRating,costForTwo,sla} =resData?.info;
//   return (
//     //applying react component inside {}
//     // <div className="res-card" style={styleCard}>       
//     // OR
//     <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
//     <img alt="res-logo" className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
//       {/* <h3>Meghana Foods</h3> Statically giving value */}
//       <h3>{name}</h3>
//       {/* <h4>Salad, Western</h4> */}
//       <h4>{cuisines.join(', ')}</h4>
//       <h4>{avgRating}</h4>
//       <h4>{costForTwo}</h4>
//       <h4>{sla.deliveryTime} minutes</h4>
//     </div>
//   )
// }

// const resObj = [

//   {
//     "info": {
//       "id": "57240",
//       "name": "McDonald's",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/a87f58ea-72b1-4f3d-9ffe-ae74effb1073_57240.jpg",
//       "locality": "MG Road",
//       "areaName": "MG Road",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Beverages",
//         "Cafe",
//         "Desserts"
//       ],
//       "avgRating": 4.5,
//       "parentId": "630",
//       "avgRatingString": "4.5",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 50,
//         "lastMileTravel": 10,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "10.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 23:45:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Burger.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Burger.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "20% OFF",
//         "subHeader": "UPTO ₹50"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-kochi-57240",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "240093",
//       "name": "Pizza Hut",
//       "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//       "locality": "Fort Kochi",
//       "areaName": "Fort Kochi",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Pizzas"
//       ],
//       "avgRating": 4.3,
//       "parentId": "721",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 49,
//         "lastMileTravel": 6.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "45-50 mins",
//         "lastMileTravelString": "6.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-08 01:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Pizza.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Pizza.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "ITEMS",
//         "subHeader": "AT ₹179"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/pizza-hut-fort-kochi-kochi-240093",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "233804",
//       "name": "KFC",
//       "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
//       "locality": "MG Road",
//       "areaName": "Ravipuram",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Biryani",
//         "American",
//         "Snacks",
//         "Fast Food"
//       ],
//       "avgRating": 4.5,
//       "parentId": "547",
//       "avgRatingString": "4.5",
//       "totalRatingsString": "5K+",
//       "sla": {
//         "deliveryTime": 43,
//         "lastMileTravel": 7.4,
//         "serviceability": "SERVICEABLE",
//         "slaString": "40-45 mins",
//         "lastMileTravelString": "7.4 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 23:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "40% OFF",
//         "subHeader": "UPTO ₹80"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/kfc-mg-road-ravipuram-kochi-233804",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "53355",
//       "name": "Burger King",
//       "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//       "locality": "MG Road",
//       "areaName": "MG Road",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Burgers",
//         "American"
//       ],
//       "avgRating": 4.5,
//       "parentId": "166",
//       "avgRatingString": "4.5",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 62,
//         "lastMileTravel": 10.2,
//         "serviceability": "SERVICEABLE",
//         "slaString": "60-65 mins",
//         "lastMileTravelString": "10.2 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 23:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "60% OFF",
//         "subHeader": "UPTO ₹120"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/burger-king-mg-road-kochi-53355",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "57445",
//       "name": "Subway",
//       "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
//       "locality": "Panampilly Nagar",
//       "areaName": "Elamkulam",
//       "costForTwo": "₹350 for two",
//       "cuisines": [
//         "Healthy Food",
//         "Salads",
//         "Snacks",
//         "Desserts",
//         "Beverages"
//       ],
//       "avgRating": 4.3,
//       "parentId": "2",
//       "avgRatingString": "4.3",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 47,
//         "lastMileTravel": 7.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "45-50 mins",
//         "lastMileTravelString": "7.9 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-08 01:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "subHeader": "UPTO ₹100"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/subway-panampilly-nagar-elamkulam-kochi-57445",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "64001",
//       "name": "Chicking",
//       "cloudinaryImageId": "86f52324ecee5fc94cbf63c4a568b672",
//       "locality": "P T Jacob Road",
//       "areaName": "Thopumpady",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Snacks",
//         "Grill",
//         "Fast Food",
//         "American",
//         "Pizzas",
//         "Mexican",
//         "Beverages"
//       ],
//       "avgRating": 4.2,
//       "parentId": "251",
//       "avgRatingString": "4.2",
//       "totalRatingsString": "5K+",
//       "sla": {
//         "deliveryTime": 41,
//         "lastMileTravel": 2.7,
//         "serviceability": "SERVICEABLE",
//         "slaString": "40-45 mins",
//         "lastMileTravelString": "2.7 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-08 02:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "40% OFF",
//         "subHeader": "UPTO ₹80"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/chicking-p-t-jacob-road-thopumpady-kochi-64001",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "59495",
//       "name": "Chiyang",
//       "cloudinaryImageId": "tl3i1i7m0bgdd1r6uygk",
//       "locality": "Kadavanthra",
//       "areaName": "Vyttila",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Chinese"
//       ],
//       "avgRating": 4.4,
//       "parentId": "5445",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 46,
//         "lastMileTravel": 9.9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "45-50 mins",
//         "lastMileTravelString": "9.9 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 23:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Chinese.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "aggregatedDiscountInfoV2": {
        
//       },
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Chinese.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/chiyang-kadavanthra-vyttila-kochi-59495",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "55090",
//       "name": "Burger Spot",
//       "cloudinaryImageId": "z4bdm7svrspopgmicc5v",
//       "locality": "GCDA Shopping Complex",
//       "areaName": "Panampilly Nagar",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "Continental",
//         "Snacks",
//         "Beverages"
//       ],
//       "avgRating": 4.6,
//       "parentId": "4751",
//       "avgRatingString": "4.6",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 47,
//         "lastMileTravel": 8.1,
//         "serviceability": "SERVICEABLE",
//         "slaString": "45-50 mins",
//         "lastMileTravelString": "8.1 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 23:00:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "30% OFF",
//         "subHeader": "UPTO ₹75"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/burger-spot-gcda-shopping-complex-panampilly-nagar-kochi-55090",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "124773",
//       "name": "Malabar Plaza",
//       "cloudinaryImageId": "hlz7icmwbptgwmerqtfd",
//       "locality": "Mg Road",
//       "areaName": "Valanjambalam",
//       "costForTwo": "₹200 for two",
//       "cuisines": [
//         "South Indian",
//         "Chinese"
//       ],
//       "avgRating": 3.8,
//       "parentId": "4756",
//       "avgRatingString": "3.8",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 50,
//         "lastMileTravel": 8.5,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "8.5 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 21:01:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "₹150 OFF",
//         "subHeader": "ABOVE ₹399",
//         "discountTag": "FLAT DEAL"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/malabar-plaza-mg-road-valanjambalam-kochi-124773",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "54746",
//       "name": "Ceylon Biriyani",
//       "cloudinaryImageId": "deebed21cec15ede08a3f86d84ff9da2",
//       "locality": "Srv Road",
//       "areaName": "Woodland Junction",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "South Indian",
//         "Chinese",
//         "Biryani"
//       ],
//       "avgRating": 4.4,
//       "parentId": "1492",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 48,
//         "lastMileTravel": 9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "45-50 mins",
//         "lastMileTravelString": "9.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 23:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "newg.png",
//             "description": "Gourmet"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Gourmet",
//                   "imageId": "newg.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "60% OFF",
//         "subHeader": "UPTO ₹120"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/ceylon-biriyani-srv-road-woodland-junction-kochi-54746",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "222972",
//       "name": "The Belgian Waffle Co.",
//       "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
//       "locality": "Ravipuram",
//       "areaName": "Ravipuram",
//       "costForTwo": "₹200 for two",
//       "cuisines": [
//         "Waffle",
//         "Desserts",
//         "Ice Cream",
//         "Beverages"
//       ],
//       "avgRating": 4.6,
//       "parentId": "2233",
//       "avgRatingString": "4.6",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 57,
//         "lastMileTravel": 7.3,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "7.3 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 23:59:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "aggregatedDiscountInfoV2": {
        
//       },
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "pureveg",
//                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-ravipuram-kochi-222972",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "56769",
//       "name": "Natural Ice Cream",
//       "cloudinaryImageId": "pzqizhikgymhcumrtytk",
//       "locality": "Pallimukku",
//       "areaName": "Pallimukku",
//       "costForTwo": "₹150 for two",
//       "cuisines": [
//         "Ice Cream",
//         "Desserts"
//       ],
//       "avgRating": 4.8,
//       "parentId": "2093",
//       "avgRatingString": "4.8",
//       "totalRatingsString": "5K+",
//       "sla": {
//         "deliveryTime": 45,
//         "lastMileTravel": 8.4,
//         "serviceability": "SERVICEABLE",
//         "slaString": "45-50 mins",
//         "lastMileTravelString": "8.4 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 23:30:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "subHeader": "UPTO ₹100"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/natural-ice-cream-pallimukku-kochi-56769",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "54676",
//       "name": "Gokul Oottupura",
//       "cloudinaryImageId": "542e37cb1343ea18ba8f0a2a43074e0f",
//       "locality": "Pallimukku",
//       "areaName": "Pallimukku",
//       "costForTwo": "₹200 for two",
//       "cuisines": [
//         "South Indian",
//         "North Indian",
//         "Kerala",
//         "Chinese"
//       ],
//       "avgRating": 4.6,
//       "parentId": "434888",
//       "avgRatingString": "4.6",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 50,
//         "lastMileTravel": 9.1,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "9.1 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 22:30:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Kerala%20Food.png",
//             "description": "Delivery!"
//           },
//           {
//             "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
//             "description": "Delivery!"
//           },
//           {
//             "imageId": "v1695133679/badges/Pure_Veg111.png",
//             "description": "pureveg"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Kerala%20Food.png"
//                 }
//               },
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
//                 }
//               },
//               {
//                 "attributes": {
//                   "description": "pureveg",
//                   "imageId": "v1695133679/badges/Pure_Veg111.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "20% OFF",
//         "subHeader": "UPTO ₹50"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/gokul-oottupura-pallimukku-kochi-54676",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "121419",
//       "name": "Palaaram",
//       "cloudinaryImageId": "mz69ogfrejetsashmlrz",
//       "locality": "Kadavanthra",
//       "areaName": "Panampilly Nagar",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "South Indian",
//         "Chinese",
//         "Arabian",
//         "Kerala"
//       ],
//       "avgRating": 4.5,
//       "parentId": "18945",
//       "avgRatingString": "4.5",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 54,
//         "lastMileTravel": 10,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "10.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 22:45:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Coastal.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "aggregatedDiscountInfoV2": {
        
//       },
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Coastal.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/palaaram-kadavanthra-panampilly-nagar-kochi-121419",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "54749",
//       "name": "Ceylon Bake House",
//       "cloudinaryImageId": "o0kgpk2osdjinrso6zu6",
//       "locality": "Mg Road",
//       "areaName": "Chittoor Road",
//       "costForTwo": "₹300 for two",
//       "cuisines": [
//         "South Indian",
//         "North Indian",
//         "Chinese",
//         "Biryani"
//       ],
//       "avgRating": 4.4,
//       "parentId": "5436",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "10K+",
//       "sla": {
//         "deliveryTime": 47,
//         "lastMileTravel": 9,
//         "serviceability": "SERVICEABLE",
//         "slaString": "45-50 mins",
//         "lastMileTravelString": "9.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 23:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "newg.png",
//             "description": "Gourmet"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Gourmet",
//                   "imageId": "newg.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "60% OFF",
//         "subHeader": "UPTO ₹120"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/ceylon-bake-house-mg-road-chittoor-road-kochi-54749",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "403519",
//       "name": "The Burger Junction",
//       "cloudinaryImageId": "b79qxaca0anzkjo61my0",
//       "locality": "Panampilly Nagar",
//       "areaName": "Panampilly Nagar",
//       "costForTwo": "₹500 for two",
//       "cuisines": [
//         "American",
//         "Beverages"
//       ],
//       "avgRating": 4.6,
//       "parentId": "5433",
//       "avgRatingString": "4.6",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 42,
//         "lastMileTravel": 7.4,
//         "serviceability": "SERVICEABLE",
//         "slaString": "40-45 mins",
//         "lastMileTravelString": "7.4 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-08 02:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Burger.png",
//             "description": "Delivery!"
//           },
//           {
//             "imageId": "newg.png",
//             "description": "Gourmet"
//           }
//         ]
//       },
//       "isOpen": true,
//       "aggregatedDiscountInfoV2": {
        
//       },
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Burger.png"
//                 }
//               },
//               {
//                 "attributes": {
//                   "description": "Gourmet",
//                   "imageId": "newg.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/the-burger-junction-panampilly-nagar-kochi-403519",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "410156",
//       "name": "Starbucks Coffee",
//       "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
//       "locality": "Mig Housing Society",
//       "areaName": "Panampilly Nagar",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Beverages",
//         "Cafe",
//         "Snacks",
//         "Desserts",
//         "Bakery",
//         "Ice Cream"
//       ],
//       "avgRating": 4.5,
//       "parentId": "195515",
//       "avgRatingString": "4.5",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 47,
//         "lastMileTravel": 8.1,
//         "serviceability": "SERVICEABLE",
//         "slaString": "45-50 mins",
//         "lastMileTravelString": "8.1 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 23:59:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "40% OFF",
//         "subHeader": "UPTO ₹80"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/starbucks-coffee-mig-housing-society-panampilly-nagar-kochi-410156",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "123175",
//       "name": "Baskin Robbins - Ice Cream Desserts",
//       "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
//       "locality": "Panampilly Nagar",
//       "areaName": "Thevara",
//       "costForTwo": "₹199 for two",
//       "cuisines": [
//         "Ice Cream"
//       ],
//       "avgRating": 4.7,
//       "veg": true,
//       "parentId": "5588",
//       "avgRatingString": "4.7",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 40,
//         "lastMileTravel": 7.8,
//         "serviceability": "SERVICEABLE",
//         "slaString": "40-45 mins",
//         "lastMileTravelString": "7.8 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 23:45:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
//             "description": "Delivery!"
//           }
//         ]
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "40% OFF",
//         "subHeader": "UPTO ₹80"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-panampilly-nagar-thevara-kochi-123175",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "99740",
//       "name": "Nasi And Mee",
//       "cloudinaryImageId": "fcfbb198ec883b935e9db2582fa7a378",
//       "locality": "MG Road",
//       "areaName": "MG Road",
//       "costForTwo": "₹800 for two",
//       "cuisines": [
//         "Pan-Asian",
//         "Singaporean",
//         "Malaysian",
//         "Japanese",
//         "Thai"
//       ],
//       "avgRating": 4.6,
//       "parentId": "19997",
//       "avgRatingString": "4.6",
//       "totalRatingsString": "1K+",
//       "sla": {
//         "deliveryTime": 57,
//         "lastMileTravel": 9.6,
//         "serviceability": "SERVICEABLE",
//         "slaString": "55-60 mins",
//         "lastMileTravelString": "9.6 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 23:00:00",
//         "opened": true
//       },
//       "badges": {
//         "imageBadges": [
//           {
//             "imageId": "Rxawards/_CATEGORY-Pan-Asian.png",
//             "description": "Delivery!"
//           },
//           {
//             "imageId": "newg.png",
//             "description": "Gourmet"
//           }
//         ]
//       },
//       "isOpen": true,
//       "aggregatedDiscountInfoV2": {
        
//       },
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
//             "badgeObject": [
//               {
//                 "attributes": {
//                   "description": "Delivery!",
//                   "imageId": "Rxawards/_CATEGORY-Pan-Asian.png"
//                 }
//               },
//               {
//                 "attributes": {
//                   "description": "Gourmet",
//                   "imageId": "newg.png"
//                 }
//               }
//             ]
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/nasi-and-mee-mg-road-kochi-99740",
//       "type": "WEBLINK"
//     }
//   },
//   {
//     "info": {
//       "id": "395269",
//       "name": "McDonald's Gourmet Burger Collection",
//       "cloudinaryImageId": "j3jlu5fsnqjtpbv1ccek",
//       "locality": "Mg Road",
//       "areaName": "Kaloor",
//       "costForTwo": "₹600 for two",
//       "cuisines": [
//         "Burgers",
//         "Beverages",
//         "Cafe",
//         "Desserts"
//       ],
//       "avgRating": 4.5,
//       "parentId": "10761",
//       "avgRatingString": "4.5",
//       "totalRatingsString": "100+",
//       "sla": {
//         "deliveryTime": 51,
//         "lastMileTravel": 10,
//         "serviceability": "SERVICEABLE",
//         "slaString": "50-55 mins",
//         "lastMileTravelString": "10.0 km",
//         "iconType": "ICON_TYPE_EMPTY"
//       },
//       "availability": {
//         "nextCloseTime": "2024-04-07 23:45:00",
//         "opened": true
//       },
//       "badges": {
        
//       },
//       "isOpen": true,
//       "type": "F",
//       "badgesV2": {
//         "entityBadges": {
//           "imageBased": {
            
//           },
//           "textBased": {
            
//           },
//           "textExtendedBadges": {
            
//           }
//         }
//       },
//       "aggregatedDiscountInfoV3": {
//         "header": "50% OFF",
//         "subHeader": "UPTO ₹100"
//       },
//       "differentiatedUi": {
//         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         "differentiatedUiMediaDetails": {
//           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//           "lottie": {
            
//           },
//           "video": {
            
//           }
//         }
//       },
//       "reviewsSummary": {
        
//       },
//       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       "restaurantOfferPresentationInfo": {
        
//       }
//     },
//     "analytics": {
      
//     },
//     "cta": {
//       "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-mg-road-kaloor-kochi-395269",
//       "type": "WEBLINK"
//     }
//   }

// ];
// const Body = () =>{
//   return(
//     <div className="body">
//       <div className="search">
//         Search
//       </div>
//       <div className="res-container">
//         {/* RestaurantCard */}
//         {/* <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/>
//         <RestaurantCard/> */}
//         {/* props */}
//         {/* <RestaurantCard resName="Meghana Foods" cuisine="Diet Foods"/> This is called passing props to a component */}
//         {/* <RestaurantCard resData={resObj[0]}/>
//         <RestaurantCard resData={resObj[1]}/>
//         <RestaurantCard resData={resObj[2]}/>
//         <RestaurantCard resData={resObj[3]}/> */}
//         {resObj.map((restaurant)=>{
//           // we need to add a key when using a loop as it is used to uniquely identify each component
//           return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
//         })};
//       </div>
//     </div>
//   )
// }
import Header from "./components/Header"; {/* to use the Header component from components folder we import it here which was exported from the location specified*/}
import Body from "./components/Body"
const AppLayout = ()=>{
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
