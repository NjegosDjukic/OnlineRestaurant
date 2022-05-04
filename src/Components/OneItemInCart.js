import React, { useContext, useEffect, useState } from 'react';
import { ACTIONS } from '../Reducers/CartReducer';
import { CartContext } from '../Context/Context';

const OneItemInCart = ({item , index}) => {
  const {dispatch} = useContext(CartContext)
  const [total , setTotal] = useState(0)
  const itemqty = item.qty

  useEffect(() => {
    setTotal(((item.price * item.qty) / 100) * 90)
   },[item.qty])
  const increaseqty = () => {
    const payload = {
      index,
      itemqty,
    }
    dispatch({
      type : ACTIONS.INCREASE_QUANTITY,
      payload : payload
    })
  }
  const decreaseqty = () => {
    const payload = {
      index,
      itemqty,
    }
    dispatch({
      type : ACTIONS.REDUCE_QUANTITY,
      payload : payload
    })
  }
  return (
    <div className='one-item-wrap'>
      {item.qty > 0 ? <h1 style={{display: 'none'}}>{item.qty}</h1> : <h1 style={{display: 'none'}}>{item.qty = 0}</h1>}
      <div key={item.id} className="cart-wrapper">
        <div className='row'>
          <div>
            <img src={item.image} fluid rounded className='cart-product-image' />
          </div>
          <span className='text-in-cart'>{item.name}</span>
          <span className='text-in-cart'>{item.qty} x {item.price}$</span>
          <div  className='cart-quantity'>
            <span className='text-in-cart'>Quantity:  
              <button onClick={decreaseqty} className="qty-buttons">-</button><span className='mx-2'>{item.qty}</span>
              <button onClick={increaseqty} className="qty-buttons">+ </button>
            </span>                   
            <button
              onClick={() =>
                dispatch({
                  type : ACTIONS.REMOVE_FROM_CART,
                  payload : item
                })}
                className="cart-remove-button"> Remove
            </button>
          </div>
        </div>      
      </div>
    </div>
  )
}
export default OneItemInCart;