import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment(1));
    // dispatch({ type: "increment", amount: 1 });
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement(2));
    // dispatch({ type: "decrement" , amount:1});
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
    // dispatch({ type: "toggle" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
