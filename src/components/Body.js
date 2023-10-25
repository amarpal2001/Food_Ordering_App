import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6041097&lng=77.289585&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
        //optional chaining
        setListOfRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
    console.log("json data printed", json);
    //  console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants[1].info.name) 
  };

  return (
    <>
      {listOfRestaurants.length > 0 ? (
        <div className="body">
          <div className="filter">
            <div>
              <input
                type="text"
                className="search-box"
                placeholder="search"
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                value={searchText}
              />
              <button
                onClick={() => {
                  const filteredRestaurantSearch = listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurant(filteredRestaurantSearch);
                }}
              >
                search
              </button>
            </div>
            <button
              className="filter-btn"
              onClick={() => {
                // Filter logic here
                const filteredList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
                );
                setFilteredRestaurant(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div className="res-container">
            {listOfRestaurants &&
              filteredRestaurant.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              ))}
          </div>
        </div>
      ) : (
        <ShimmerUI />
      )}
    </>
  );
};

export default Body;
