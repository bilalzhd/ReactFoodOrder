import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartModal from './components/Cart/Cart';
import './App.css';
import CartContextProvider from './store/CartContextProvider';

function App() {
  const [ cartIsShown, setCartIsShown ] = useState(false);

  const cartShownHandler = ()=> {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartContextProvider>
      {cartIsShown && <CartModal onClose={hideCartHandler}/>}
      <Header onCartShow={cartShownHandler}/>
        <main>
          <Meals />
        </main>
    </CartContextProvider>

  );
}

export default App;
