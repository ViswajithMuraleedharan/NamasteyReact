import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = (data, showItems, setShowIndex, setHideIndex) => {
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    data.setShowIndex();
    if (data.showItems) {
      data.setHideIndex();
    }
    // setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-grey-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          {/* Header */}
          <span className="font-bold text-lg">
            {data.data.title} ({data.data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Body */}
        {data.showItems && <ItemList items={data.data.itemCards} />}
        {/* <span>First</span> */}
      </div>
    </div>
  );
};
export default RestaurantCategory;
