import React from 'react'
import { CDN_URL } from '../utils/constants'

const RestaurantCard = ({resData}) => {
    // console.log('resturant data', resData)
    // console.log('Restaurant info', resData.info)
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating} = resData?.info
  
    return (
      <div className='res-card'>
        <img className='res-logo' src={ CDN_URL + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{costForTwo} stars</h4>
        <h4>{avgRating} stars</h4>
      </div>
    )
  }

  export default RestaurantCard 