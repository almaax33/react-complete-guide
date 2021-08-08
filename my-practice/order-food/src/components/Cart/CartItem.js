import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const onAddHandler = () => {
    cartCtx.addMeal(props.meal, 1);
  };
  const onRemoveHandler = () => {
    cartCtx.removeMeal(props.meal.id);
  };

  return (
    <li className={classes["cart-item"]} key={props.meal.id}>
      <div>
        <h2>{props.meal.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.meal.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveHandler}>−</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
