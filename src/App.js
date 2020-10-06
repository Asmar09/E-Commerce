import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ProductsContextProvider from './Global/ProductsContext';
import CartContextProvider from './Global/CartContext';
import Products from './Components/Products';
import { Route, Switch} from 'react-router-dom';
import Cart from './Components/Cart';
import NotFound from './Components/NotFound';
function App() {
  return (
    <div >
      <ProductsContextProvider>
        <CartContextProvider>
       
        <Navbar />
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/cart" exact component={Cart} />
            <Route component={NotFound} />
          </Switch>
       </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
