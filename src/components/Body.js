import React, { useState } from "react";
import ReactDom from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {

    let [listOfRestaurants, setListOfRestaurants] = useState(resList)

              
    let listOfRestaurantsJS = [
          {
            "info": {
              "id": "226273",
              "name": "Nirula's",
              "cloudinaryImageId": "94c82b9d46792c198fff64899ff05bd2",
              "locality": "1St Phase",
              "areaName": "Mayur Vihar",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Pizzas",
                "Burgers",
                "Ice Cream",
                "North Indian",
                "Fast Food",
                "Pastas",
                "Beverages"
              ],
              "avgRating": 3.9,
              "feeDetails": {
                "restaurantId": "226273",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 4300
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 4300
              },
              "parentId": "1738",
              "avgRatingString": "3.9",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 0.4,
                "serviceability": "SERVICEABLE",
                "slaString": "16 mins",
                "lastMileTravelString": "0.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-09-23 04:00:00",
                "opened": true
              },
              "badges": {
                "textExtendedBadges": [
                  {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "description": "",
                          "fontColor": "#7E808C",
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available"
                        }
                      }
                    ]
                  }
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
          },
          {
            "info": {
              "id": "205404",
              "name": "Rollsking",
              "cloudinaryImageId": "jbh1c8eb0qnkmd8xthr6",
              "locality": "1St Phase",
              "areaName": "Mayur Vihar",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "North Indian",
                "Fast Food",
                "Beverages"
              ],
              "avgRating": 4.5,
              "feeDetails": {
                "restaurantId": "205404",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3700
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3700
              },
              "parentId": "4697",
              "avgRatingString": "3.9",
              "totalRatingsString": "1K+",
              "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 0.6,
                "serviceability": "SERVICEABLE",
                "slaString": "18 mins",
                "lastMileTravelString": "0.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-09-22 23:59:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            }
          },
          {
            "info": {
              "id": "10710",
              "name": "Subway",
              "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
              "locality": "2nd Phase",
              "areaName": "Mayur Vihar",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Salads",
                "Snacks",
                "Beverages"
              ],
              "avgRating": 4.3,
              "feeDetails": {
                "restaurantId": "10710",
                "fees": [
                  {
                    "name": "BASE_DISTANCE",
                    "fee": 3700
                  },
                  {
                    "name": "BASE_TIME"
                  },
                  {
                    "name": "ANCILLARY_SURGE_FEE"
                  }
                ],
                "totalFee": 3700
              },
              "parentId": "2",
              "avgRatingString": "4.3",
              "totalRatingsString": "10K+",
              "sla": {
                "deliveryTime": 15,
                "lastMileTravel": 0.6,
                "serviceability": "SERVICEABLE",
                "slaString": "15 mins",
                "lastMileTravelString": "0.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2023-09-23 01:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              }
            },
            "analytics": {
              
            },
            "cta": {
              "link": "https://www.swiggy.com/restaurants/subway-2nd-phase-mayur-vihar-delhi-10710",
              "type": "WEBLINK"
            }
          }
        ]
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(res => res.info.avgRating>4)
            setListOfRestaurants(filteredList)
          }}
          
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
