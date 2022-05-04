import React, { useContext, useState } from 'react';
import '../Styles/Navmenu.css';
import { Dropdown, Badge, Button, Navbar } from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';
import { CartContext } from '../Context/Context';
import { ACTIONS } from '../Reducers/CartReducer';
import { AiFillDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi';

const Navmenu = () => {
    const {state: {cart}, dispatch } = useContext(CartContext)
    const { productDispatch} = useContext(CartContext)
    const [open, setOpen] = useState(true)

    const openMenu = () => {
        setOpen(!open)
    }
  return (
    <nav className='navbar' >
        <div className="nav-wrap">
            <BiMenuAltLeft id='hamburger-icon' onClick={openMenu}/> 
            <div className='navbar-links-group'>
                <ul id={open === true ? 'opened' : "hidden"}>
                    <li>
                        <Link to='/' onClick={() => setOpen(true)}>Menu</Link>
                    </li>
                    <li>
                        <Link to='/add' onClick={() => setOpen(true)}>Add</Link>
                    </li>
                    <li>
                        <input type="text" className='search'  onChange={(e) => productDispatch({
                        type: ACTIONS.FILTER_BY_SEARCH,
                        payload: e.target.value
                        })} />
                    </li>
                    <li>
                        <Dropdown> 
                            <Dropdown.Toggle className='btn-primary'>
                                <FaShoppingCart color="white" fontSize="25px" />
                                <Badge bg="">{cart.length}</Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {cart.length > 0 ? 
                                <>
                                    {cart.map((item) => (
                                        <span className='cart-item' key={item.id}>
                                            <img
                                                src={item.image}
                                                className="cartItemImg"
                                            />
                                            <div className="cartItemDetail">
                                                <span>{item.name}</span>
                                                <span>{item.price}$</span>
                                            </div>
                                            <AiFillDelete 
                                                fontSize="20px"
                                                onClick={() => 
                                                    dispatch({
                                                        type: ACTIONS.REMOVE_FROM_CART,
                                                        payload: item
                                                    })
                                                }
                                            />
                                        </span>
                                    )     
                            )}  
                                <Link to='/cart'>    
                                    <Button style={{width: '90%', margin: '10px'}} onClick={() => setOpen(true)}>Go to Cart</Button>                            
                                </Link>
                                <Button 
                                    style={{width: '90%', margin: '10px'}}
                                    onClick={() => {
                                        dispatch({
                                        type: ACTIONS.DELETE_ALL,
                                    })
                            }}
                                >Clear Cart
                                </Button>
                                </> 
                                : 
                                <span>Cart is empty!</span>}
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>    
                </ul>     
            </div>
        </div>     
    </nav>
  )
}
export default Navmenu;