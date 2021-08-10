import { useRef, useState } from "react";

import classes from "./TaskForm.module.css";

const TaskForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [enteredTaskIsValid, setEnteredTaskIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredValue = inputText;
    if (enteredValue.trim() === "") {
      setEnteredTaskIsValid(false);
    }
    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
    setInputText("");
  };

  const onChangeInputHandler = (event) => {
    setEnteredTaskIsValid(true);
    setInputText(event.target.value);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" value={inputText} onChange={onChangeInputHandler} />
      {!enteredTaskIsValid && <p>Task must not be empty.</p>}
      <button>{props.loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
