import React from 'react'
import { CDN_URL } from '../utils/constants'

const AccordionBody = ({items}) => {
  return (
    <div>
        {items.map(item => (
        <div key={item.card.info.id} className='p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between'>
            <div className='w-9/12'>
            <div className='py-2'>
                <span>{item.card.info.name}</span>
                <span> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
             </div>
             <p className='text-xs'>{item.card.info.description}</p>
         </div>
         <div className='w-3/12 p-2'> 
            <div className='absolute '>
                <button className='px-2 py-1 mt-8 mx-12 rounded-lg bg-white text-black shadow-lg font-bold'>ADD +</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className='rounded-xl'/>
            </div>
         </div>
        ))}
    </div>
  )
}

export default AccordionBody
