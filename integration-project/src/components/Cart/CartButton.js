import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
