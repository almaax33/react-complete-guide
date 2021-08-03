import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpense, setShowExpense] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const onShowExpenseHandler = (event) => {
    setShowExpense(true);
  };
  const onHideExpenseHandler = () => {
    setShowExpense(false);
  };

  return (
    <div className="new-expense">
      {showExpense ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHideExpenseHandler={onHideExpenseHandler}
        />
      ) : (
        <div>
          <button onClick={onShowExpenseHandler}>Add New Expense</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
