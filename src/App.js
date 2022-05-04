import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Components/Menu';
import Cart from './Components/Cart';
import Context from './Context/Context';
import AddItem from './Components/AddItem';
import Navmenu from './Components/Navbar';
import './App.css';

function App() {
  return (
    <div className='body'>
      <Context>
        <BrowserRouter>
          <Navmenu />
          <Route path="/" exact>
            <Menu />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route> 
          <Route path="/add" exact>
            <AddItem />
          </Route> 
        </BrowserRouter>
      </Context>
    </div>
  );
}
export default App;
