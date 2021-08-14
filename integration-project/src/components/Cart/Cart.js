import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const existingItems = useSelector((state) => state.cart.items);

  const items = existingItems.map((item) => {
    return (
      <CartItem
        key= {item.id}
        item={{
          id: item.id,
          title: item.name,
          quantity: item.amount,
          total: item.price * item.amount,
          price: item.price,
        }}
      />
    );
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{items}</ul>
    </Card>
  );
};

export default Cart;
