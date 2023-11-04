import React, { useEffect, useState } from "react";
import { Shimmer } from "react-shimmer";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {

  const {resId} = useParams()

  const resInfo = useRestaurantMenu(resId)
  
  const [showIndex, setShowIndex] = useState()

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API + resId
  //   );
  //   const json = await data.json();
  //   setResInfo(json.data);
  //   console.log("resutrant menu data", json);
  // };

  if (resInfo === null) return <ShimmerUI />;


  const {
    name,
    cuisines,
    costForTwo,
    costForTwoMessage,
    avgRating,
    cloudinaryImageId,
  } = resInfo?.cards[0]?.card?.card?.info;
  
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log('item cards', itemCards);
  // console.log('recomended', resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log('filtered categories', categories)

  return  (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      {/* { categories accordian} */}
        {categories.map((category, index) => 
        <RestaurantCategories
        showItems={index === showIndex ? true : false} 
        key={category?.card?.card?.title} 
        data={category?.card?.card}
        setShowIndex={() => setShowIndex(index)}
        />
        )}


      {/* <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {" Rs."} {item.card.info.price/100}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
