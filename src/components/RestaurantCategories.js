import React, {useState} from 'react'
import AccordionBody from './AccordionBody'

const RestaurantCategories = ({data, showItems, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex()
    }
  return (
    <div>
      {/* {accordion header} */}
        <div className='w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4 '>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
            <span className='font-bold text-sm'>{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            { showItems && <AccordionBody items={data.itemCards}/>}
        </div>
      {/* accordion body */}
    </div>
  )
}

export default RestaurantCategories
