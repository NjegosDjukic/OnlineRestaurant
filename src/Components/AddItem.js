import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/Context';
import { ACTIONS } from '../Reducers/CartReducer';
import { Button, Form } from 'react-bootstrap';
import '../Styles/Menu.css';

const AddItem = () => {
    const {state , dispatch} = useContext(CartContext)
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    let vegan = false;
    let burgers = false;
    let drinks = false;
    let diet = false;
    let newId = state.products.length + 1;

    const send = (e) => {
        e.preventDefault();
        const payload = {
            name,
            image,
            newId,
            price,
            vegan,
            burgers,
            drinks,
            diet,
        }
        dispatch({
            type : ACTIONS.ADD,
            payload
        }) 
    }
  return (
         <div className='add-item-wrapper'>
            <Form onSubmit={send}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter a name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="text" placeholder='Enter a price' onChange={(e) => setPrice(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Image link:</Form.Label>
                    <Form.Control type="text" placeholder='Enter a image link'  onChange={(e) => setImage(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Vegan:</Form.Label>
                    <Form.Control type="checkbox"  onClick={() => vegan = true} className="check" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Burger:</Form.Label>
                    <Form.Control type="checkbox" onClick={() => burgers = true} className="check" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Diet:</Form.Label>
                    <Form.Control type="checkbox" onClick={() => diet = true} className="check" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Drinks:</Form.Label>
                    <Form.Control type="checkbox" onClick={() => drinks = true} className="check" />
                </Form.Group>
                <Button type="submit" className='add-button'>Add Item</Button> 
            </Form>
        </div>  
        )
}

export default AddItem 