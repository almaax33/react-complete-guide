import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [showCart, setShowCart] = useState(false);

  const hideCartHandler = () => {
    setShowCart(false);
  };
  const showCartHandler = ()=> {
    setShowCart(true);
  };

  return (
    <React.Fragment>
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </React.Fragment>
  );
}

export default App;
