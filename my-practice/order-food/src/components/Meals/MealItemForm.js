import { useContext, useEffect, useRef, useState } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    console.log("imworking");
    setAmountIsValid(true);
  }, [amountInputRef]);

  const onClickHandle = () => {
    const meal = {
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
    };
    const amount = +amountInputRef.current.value;

    if (
      amountInputRef.current.value.trim().length === 0 ||
      amount < 1 ||
      amount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    amountInputRef.current.value = 1;
    setAmountIsValid(true);
    cartCtx.addMeal(meal, amount);
  };
  return (
    <form className={classes.form}>
      <Input
        ref={amountInputRef}
        input={{
          id: "amount_" + props.meal.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
        label="Amount"
      />
      <Button onClick={onClickHandle} type={"button"} title={"Add"} />
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
