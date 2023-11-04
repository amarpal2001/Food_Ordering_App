import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AccordionBody from './AccordionBody'
import { clearCart } from "../utils/cartSlice";

const Carts = () => {

  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()

    const handleClearCart = () => {
      dispatch(clearCart())
    }


  
  return (
    <div className='text-center m-4 p-4 '>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
        <button className='p-1 m-2 border bg-black text-white rounded-lg' onClick={handleClearCart}>
          Clear Cart
          </button>
          {cartItems.length===0 && <h1 className='font-bold m-5'>Cart is empty. Add Items to the cart</h1>}
        <AccordionBody items={cartItems}/>
      </div>
     
    </div>
  )
}

export default Carts
