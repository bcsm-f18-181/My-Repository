import { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const cartShowHandler = () => {
    setCartShow(true);
  };
  const hideCartHandler = () => {
    setCartShow(false);
  };
  return (
    <CartProvider>
      {cartShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={cartShowHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
