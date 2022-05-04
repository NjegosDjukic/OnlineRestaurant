import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Styles/Filters.css';
import { ACTIONS } from '../Reducers/CartReducer';
import { AiOutlineClose } from 'react-icons/ai';
import { CartContext } from '../Context/Context';

const Filters = ({open, setOpen}) => {
  const {productState : { sort, vegan, diet, drinks, burgers}, productDispatch} = useContext(CartContext)
  
  return (
    <div className='filters' id={open === true && "id1"}>
      <AiOutlineClose  className='close-filters' onClick={() => setOpen(false)}/>
      <span className='filters-title'>Filter Products</span>
        <span>
            <Form.Check
                inline
                label="Low to high"
                type="radio"
                id={'inline-1'}
                onChange={() => productDispatch({
                  type: ACTIONS.SORT_BY_PRICE,
                  payload: 'lowToHigh'
                })}
                checked={sort === 'lowToHigh' ? true : false}
                />
        </span>
        <span>
            <Form.Check
                inline
                label="High to low"
                type="radio"
                id={'inline-2'}
                onChange={() => productDispatch({
                  type: ACTIONS.SORT_BY_PRICE,
                  payload: 'highToLow'
                })}
                checked={sort === 'highToLow' ? true : false}
                />
        </span>
        <span>
            <Form.Check
                inline
                label="Vegan"
                type="checkbox"
                id={'inline-3'}
                onChange={() => 
                productDispatch({
                  type: ACTIONS.VEGAN,
                })
              }
              checked={vegan}
                />
        </span>
        <span>
        <Form.Check
                inline
                label="Burgers"
                type="checkbox"
                id={'inline-3'}
                onChange={() => 
                productDispatch({
                  type: ACTIONS.BURGERS,
                })
              }
              checked={burgers}
                />
        </span>
        <span>
            <Form.Check
                inline
                label="Diet"
                type="checkbox"
                id={'inline-3'}
                onChange={() => 
                productDispatch({
                  type: ACTIONS.DIET,
                })
              }
              checked={diet}
                />
        </span>
        <span>
            <Form.Check
                inline
                label="Drinks"
                type="checkbox"
                id={'inline-3'}
                onChange={() => 
                productDispatch({
                  type: ACTIONS.DRINKS,
                })
              }
              checked={drinks}
                />
        </span>
        <Button variant="light" onClick={() => 
          productDispatch({
            type : ACTIONS.CLEAR_FILTERS,
        })}>Clear Filters</Button> 
    </div>
  )
}
export default Filters;