import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../Context/Context';
import '../Styles/SingleProduct.css';
import { ACTIONS } from '../Reducers/CartReducer';

const SingleProduct = ({item}) => {
 const {
   state: {cart},
   dispatch,
 } = useContext(CartContext)

 const addToCart = () => {
   dispatch({
    type : ACTIONS.ADD_TO_CART,
    payload: item,
   })
 }
 const removeFromCart = () => {
  dispatch({
    type : ACTIONS.REMOVE_FROM_CART,
    payload: item,
   })
 }
  return (
    <div className='products'>
        <Card>
            <Card.Img variant="top" src={item.image} className="menu-product-image"></Card.Img>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className='my-3'>Price: {item.price}$</Card.Subtitle>
              {
                cart.some(p=>p.id===item.id) ? 
                  ( <Button variant="danger mr-2" onClick={removeFromCart}> Remove from cart </Button> ) 
                 :
                  ( <Button onClick={addToCart} > Add to cart </Button> ) 
              } 
            </Card.Body>
        </Card>
    </div>
  )
}
export default SingleProduct;