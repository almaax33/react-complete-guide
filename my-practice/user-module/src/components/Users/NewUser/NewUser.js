import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import PopUp from "../../UI/PopUp/PopUp";
import classes from "./NewUser.module.css";

const NewUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [infoPopUp, setInfoPopUp] = useState();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0) {
      setInfoPopUp({
        title: "Invalid Name",
        message: "Please enter a valid name (non-empty values).",
      });
      return;
    }
    if (enteredAge.trim().length === 0 || +enteredAge < 0) {
      setInfoPopUp({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const newUser = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };
    props.onAddUser(newUser);
    setEnteredName("");
    setEnteredAge("");
  };
  const onChangeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const onChangeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setInfoPopUp(null);
  };
  return (
    <div>
      {infoPopUp && (
        <PopUp
          title={infoPopUp.title}
          message={infoPopUp.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="name">Name</label>
          <input
            value={enteredName}
            type="text"
            onChange={onChangeNameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            value={enteredAge}
            type="number"
            onChange={onChangeAgeHandler}
          />
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default NewUser;
