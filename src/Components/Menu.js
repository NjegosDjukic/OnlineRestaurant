import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/Context';
import SingleProduct from './SingleProduct';
import '../Styles/Menu.css';
import Filters from './Filters.js';


const Menu = () => {
  const [open, setOpen] = useState(false)
  const { state: {products},
          productState : {sort,searchQuery, vegan, diet, drinks, burgers}
} = useContext(CartContext)
 
  const newProducts = () => {
    let sortedProducts = products;

    if(sort){
      sortedProducts = sortedProducts.sort((a,b) => (
        sort==='lowToHigh' ? a.price - b.price : b.price - a.price
      ))
    }
    if(searchQuery){
      sortedProducts = sortedProducts.filter((product) =>  product.name.toLowerCase().includes(searchQuery)
      )
    }
    if(vegan){
      sortedProducts = sortedProducts.filter((product) => product.vegan)
    }
    if(diet){
      sortedProducts = sortedProducts.filter((product) => product.diet)
    }
    if(drinks){
      sortedProducts = sortedProducts.filter((product) => product.drinks)
    }
    if(burgers){
      sortedProducts = sortedProducts.filter((product) => product.burgers)
    }
    return sortedProducts;
  }
  return (
    <div className='menu'>
      {open == true ? <Filters open = {open} setOpen = {setOpen} /> : <button className='filters-button' onClick={() => setOpen(!open)}><span>Show filters</span></button>}
      <div className='product-container'>
        {
        newProducts().map((item) => {
           return <SingleProduct item={item} key={item.id} />
        })
        }
      </div>
    </div>
  )
}
export default Menu;