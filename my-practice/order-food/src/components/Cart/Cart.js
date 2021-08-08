import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const mealItems = cartCtx.meals.map((meal) => {
    return (
        <CartItem meal={meal} />
    );
  });
  const totalAmountMeals = cartCtx.meals.reduce(
    (currentValue, item) => currentValue + (item.price*item.amount),
    0
  );
  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes["cart-items"]}>{mealItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmountMeals.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onHideCart}>Close</button>
        <button className={classes["button--alt"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
