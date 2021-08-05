import React from "react";
import User from "../User/User";
import Card from "../../UI/Card/Card";
import classes from "./ListUsers.module.css";

const ListUsers = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <User name={user.name} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default ListUsers;
