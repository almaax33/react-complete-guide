import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./ProductItem.module.css";
import Card from "../UI/Card";

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();

  const onClickHandler = () => {
    const newItem = {
      id,
      name: title,
      price,
    };
    dispatch(cartActions.addItemToCart(newItem));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={onClickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
