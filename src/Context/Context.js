import React, { createContext, useReducer } from 'react';
import { cartReducer, productReducer } from '../Reducers/CartReducer';

export const CartContext = createContext()

export const initialstate = {
  products : [
    {name: 'Pizza Capricciosa' , price : 10, id : 1, vegan : false , diet : false, image : 'https://st2.depositphotos.com/4378763/7220/i/950/depositphotos_72208705-stock-photo-pizza-capricciosa-ham-olives-and.jpg'},
    {name: 'Pasta Carbonara' , price : 18, id : 2, vegan : false , diet : false, image: 'https://podravkaiovariations.azureedge.net/f528dc30-6406-11eb-80cc-0242ac12002f/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp'},
    {name: 'Diet Pizza' , price : 13,id : 3, vegan : false , diet : true, image: 'https://podravkaiovariations.azureedge.net/236771a8-631f-11eb-8d2a-0242ac120022/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.jpeg'},
    {name: 'Chicken Wings' , price : 15, id : 4, vegan : false , diet : false, image: 'https://c9u8e9q4.rocketcdn.me/wp-content/uploads/2021/06/Air-Fryer-Buffalo-Wings-2021-square-V2-500x500.jpg'},
    {name: 'Vegan Burger' , price : 15, id : 5, vegan : true , burgers : true, diet : false, image: 'https://podravkaiovariations.azureedge.net/d368568c-63b8-11eb-a5ab-0242ac12003b/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1600x1200-f2b21938-64bc-11eb-9498-0242ac130010.jpeg'},
    {name: 'Cheeseburger' , price : 10, id : 6, vegan : false , burgers : true, diet : false, image:'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg'},
    {name: 'Coca Cola' , price : 4, id : 7, vegan : false, drinks : true , diet : false, image:'https://www.konzumshop.ba/images/products/031/03161768_1l.gif'},
    {name: 'Fanta Orange' , price : 4, id : 8, vegan : false, drinks : true , diet : false, image:'https://www.seekpng.com/png/detail/451-4510340_fanta-naranja-png-fanta-icy-lemon-24-x.png'},
    {name: 'Sprite' , price : 4, id : 9, vegan : false, drinks : true , diet : false, image:'https://www.degas-egy.com/wp-content/uploads/2020/12/Sprite.jpg'},
    {name: 'Vegan Meal' , price : 25, id : 10, vegan : true, diet : false, image:'https://www.greenqueen.com.hk/wp-content/uploads/2020/01/lazy-cat-kitchen-vegan-larb.jpg'},
    {name: 'Sushi' , price : 30, id : 11, vegan : false, diet : false, image:'https://kuharica.kontin.info/wp-content/uploads/2020/05/Uramaki-sushi-rolice-s-tunom-i-pikantnom-majonezom-35-scaled.jpg'},
    {name: 'Diet brekfast' , price : 25, id : 12, vegan : false , diet : true, image:'https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'},
    {name: 'Vegan Pizza' , price : 25, id : 13, vegan : true , diet : true, image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/210302-vegan-spiral-cover-cauliflower-pizza-086-eb-1626711437.jpg?crop=1.00xw:0.667xh;0.00170xw,0.240xh&resize=640:*'},
    {name: 'Big Burger' , price : 20, id : 14, vegan : false , diet : false, burgers : true, image:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwYnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'},
    {name: 'Italian Lasagne' , price : 23, id : 15, vegan : false , diet : false, image:'https://www.recipetineats.com/wp-content/uploads/2017/05/Lasagne-recipe-3-main-square.jpg'}
  ],
  cart: [],
}
const Context = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer,initialstate)
    const [productState, productDispatch] = useReducer(productReducer,{
      searchQuery : "",
      vegan : false,
      diet : false,
      drinks : false,
      burgers: false,
    })

  return (
    <CartContext.Provider value={{ state, dispatch, productState, productDispatch}}>
        {children}
    </CartContext.Provider>
  )
}
export default Context;