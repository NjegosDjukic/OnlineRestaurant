import React, { useContext, useEffect, useState } from 'react';
import '../Styles/Cart.css';
import { CartContext } from '../Context/Context';
import OneItemInCart from './OneItemInCart';

const Cart = () => {
  const {state : {cart}} = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [totalItems, setTotalItems] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [totalWithDiscount, setTotalWithDiscount] = useState(0)
  const [extraDiscount, setExtraDiscount] = useState(0)
  const [totalWithExtraDiscount, setTotalWithExtraDiscount] = useState(0)
  
  useEffect(() => {
    setTotal(cart.reduce((acc,curr)  => acc + Number(curr.price * curr.qty),0))
  },[cart])

  useEffect(() => {
    setTotalItems(cart.reduce((acc,curr)  => acc + Number(curr.qty) ,0))
  },[cart])

  useEffect(() => {
    setTotalWithDiscount(cart.reduce((acc,curr)  => (acc + Number(curr.price * curr.qty / 100 * 90)),0))
  },[cart])

  useEffect(() => {
    setDiscount(cart.reduce((acc,curr)  => (acc + Number(curr.price * curr.qty / 100 * 10)),0))
  },[cart])

  useEffect(() => {
    setExtraDiscount(cart.reduce((acc,curr)  => (acc + Number(curr.price * curr.qty / 100 * 20)),0))
  },[cart])

  useEffect(() => {
    setTotalWithExtraDiscount(cart.reduce((acc,curr)  => (acc + Number(curr.price * curr.qty / 100 * 80)),0))
  },[cart])

  return (
    <div className='menu'> 
      <div className='product-container'>
          {
            cart.map((item,index) => (
              <OneItemInCart  item = {item} index = {index} totalWithDiscount= {totalWithDiscount}/>
            ))}
      </div>
      <div className='cart-info'>
        <span className='cart-title'>Number of items: ({totalItems})</span>
        <span className='cart-total' id={cart.length < 3 && 'total-bold'}>Total {total.toFixed(2)}$</span>
          {cart.length > 2 ? total > 100 ? <span className='discount'>Your extra discount(20%) is {extraDiscount.toFixed(2)}</span> 
              : 
                 <span className='discount'>Your discount(10%) is: {discount.toFixed(2)}$</span> 
            :
             <span className='discount'>Buy 3 different products to get 10% discount and spend 100$ for 20% extra discount</span>}
        {cart.length > 2 ?  
          total > 100 ? <span className='total-amount'>Total with extra discount: {totalWithExtraDiscount.toFixed(2)}$</span>
          : 
          <span className='total-amount'>Total with discount: {totalWithDiscount.toFixed(2)}$</span> : "" } 

        {cart.length > 0 && 
          <button type='button' disabled={cart.length === 0} className="order-button">
            Order now
          </button>   
        }
      </div>
    </div>
  )
}
export default Cart;