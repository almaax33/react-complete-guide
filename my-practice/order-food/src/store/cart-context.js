import React, { useReducer } from "react";

const CartContext = React.createContext({
  meals: [],
  addMeal: (meal, amount) => {},
  removeMeal: (id) => {},
});

const cartReducer = (state, action) => {
  let updatedMeals;
  if (action.input === "ADD_MEAL") {
    const existingCartMealIndex = state.meals.findIndex(
      (meal) => meal.id === action.meal.id
    );
    if (existingCartMealIndex !== -1) {
      const existingCartMeal = state.meals[existingCartMealIndex];
      const updatedMeal = {
        ...existingCartMeal,
        amount: existingCartMeal.amount + action.amount,
      };
      updatedMeals = [...state.meals];
      updatedMeals[existingCartMealIndex] = updatedMeal;
    } else {
      updatedMeals = [
        ...state.meals,
        { ...action.meal, amount: action.amount },
      ];
    }
    return { meals: updatedMeals };
  }

  if (action.input === "REMOVE_MEAL") {
    const existingCartMealIndex = state.meals.findIndex(
      (meal) => meal.id === action.id
    );
    const existingMeal = state.meals[existingCartMealIndex];
    if (existingMeal.amount === 1) {
      updatedMeals = state.meals.filter((meal) => meal.id !== action.id);
    } else {
      updatedMeals = [...state.meals];
      const updatedMeal = { ...existingMeal, amount: existingMeal.amount - 1 };
      updatedMeals[existingCartMealIndex] = updatedMeal;
    }
    return { meals: updatedMeals };
  }

  if (action.type === "CLEAR") {
    return { meals: [] };
  }
};

export const CartContextProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    meals: [],
  });

  const handlingAddMeal = (meal, amount) => {
    cartDispatch({ input: "ADD_MEAL", meal: meal, amount: amount });
  };
  const handlingRemoveMeal = (id) => {
    cartDispatch({ input: "REMOVE_MEAL", id: id });
  };
  const clearCartHandler = () => {
    cartDispatch({ input: "CLEAR" });
  };
  return (
    <CartContext.Provider
      value={{
        meals: cartState.meals,
        addMeal: handlingAddMeal,
        removeMeal: handlingRemoveMeal,
        clearCart: clearCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
